import React, { Component } from 'react'
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


export default (PostsList)
