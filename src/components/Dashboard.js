import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getList } from '../store/actions/Actions'
import { Container, Typography } from '@material-ui/core'

class Dashboard extends Component {
	componentWillMount() {
		const { getList } = this.props

		getList()
	}

	render() {
		const { results } = this.props

		return (
			<Container maxWidth='lg'>
				<Typography variant='h1'>
					Reddit API demo
				</Typography>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	const { PostsReducer: { results = [] } } = state

	return {
		results
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getList: () => dispatch(getList())
	}
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Dashboard)
