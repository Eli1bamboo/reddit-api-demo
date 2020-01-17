import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getList } from '../store/actions/Actions'
import { Container, Typography, Grid } from '@material-ui/core'
import PostsList from './PostsList'
import Pagination from './Pagination'

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pageOfItems: [],
			filteredResults: []
		}
	}

	onChangePage = (pageOfItems) => {
		this.setState({ pageOfItems: pageOfItems });
	}

	componentWillMount() {
		const { getList } = this.props

		getList()
	}

	componentWillReceiveProps(nextProps) {
		const { results, dismissed } = nextProps
		const filteredResults = results.filter(result => !dismissed.includes(result.id));

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
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dashboard)
