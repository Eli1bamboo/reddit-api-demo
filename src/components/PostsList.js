import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getList, dismissPost, seenPost } from '../store/actions/Actions'
import { Grid } from '@material-ui/core'
import ListItem from './ListItem'

class PostsList extends Component {
    render() {
        const { posts } = this.props;

        return (
            <Grid container spacing={2}>
                {
                    posts.map(item => <ListItem item={item} key={item.id} />)
                }
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    const { PostsReducer: { seen } } = state

    return {
        seen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dismissPost: (postId) => dispatch(dismissPost(postId)),
        seenPost: (postId) => dispatch(seenPost(postId)),
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(PostsList)
