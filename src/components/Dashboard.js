import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getList, setPosts } from '../store/actions/Actions'
import { Container, Typography, Grid } from '@material-ui/core'
import PostsList from './PostsList'
import Pagination from './Pagination'

class Dashboard extends Component {
	constructor() {
		super();

		this.state = {
			pageOfItems: [],
			filteredResults: []
		};
	}

	onChangePage = (pageOfItems) => {
		this.setState({ pageOfItems: pageOfItems });
	}

	componentWillMount() {
		const { getList } = this.props

		getList()
	}

	componentWillReceiveProps(nextProps) {
		const { setPosts } = this.props
		const { results, dismissed } = nextProps
		const filteredResults = []

		const posts = results.map(result => {
			if (dismissed.indexOf(result.id)) {
				filteredResults.push(result)
			}
		})

		return this.setState({
			filteredResults
		})
	}

	render() {
		const { filteredResults, pageOfItems } = this.state

		return (
			<Container maxWidth={'lg'}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={12}>
						<Typography variant={'h1'}>
							Reddit API demo
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<PostsList posts={pageOfItems} />
					</Grid>
					<Grid item xs={12} md={6}>
						Post Detail
					</Grid>
					<Grid item xs={12} md={12}>
						<Pagination items={filteredResults} onChangePage={this.onChangePage} />
					</Grid>
				</Grid>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	const { PostsReducer: { results = [], dismissed = [] } } = state

	return {
		results,
		dismissed,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getList: () => dispatch(getList()),
		setPosts: (postId) => dispatch(setPosts(postId)),
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dashboard)
