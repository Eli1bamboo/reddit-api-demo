import React from 'react'
import { Grid } from '@material-ui/core'
import ListItem from './ListItem'

const PostsList = (props) => {
    const { posts, onSelectItem } = props;

    return (
        <Grid container spacing={2}>
            {
                posts.map(item => <ListItem item={item} key={item.id} onSelectItem={onSelectItem} />)
            }
        </Grid>
    )
}

export default PostsList