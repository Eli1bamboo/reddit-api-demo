import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { dismissPost, seenPost, unseenPost } from '../store/actions/Actions'
import moment from 'moment'
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
} from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep'
import Thumbnail from './Thumbnail'

class ListItem extends Component {
    handleOnDismissPost = (postId) => {
        const { dismissPost } = this.props;

        dismissPost(postId);
    }

    handleOnSeenPost = (postId) => {
        const { seenPost, unseenPost, seen } = this.props;

        if (!seen.includes(postId)) {
            seenPost(postId);
        } else {
            unseenPost(postId);
        }
    }

    handleOnClickTitle = (post) => {
        const { onSelectItem, seenPost } = this.props;

        seenPost(post.id);

        return onSelectItem(post)
    }

    isImage = (url) => {
        return url.match(/\.(jpeg|jpg|gif|png)$/);
    }

    render() {
        const { item, seen } = this.props;

        // console.log('seeeeens', seen);

        return (
            <Grid item xs={12}>
                <Card>
                    <Grid container>
                        <Grid item xs={12}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        {item.author[0].toUpperCase()}
                                    </Avatar>
                                }
                                title={item.author}
                                subheader={`Posted ${moment.unix(item.created).fromNow()}`}
                            />
                        </Grid>
                        <Grid container>
                            {
                                this.isImage(item.url) && (
                                    <Grid item xs>
                                        <Thumbnail imgUrl={item.url} title={item.title} />
                                    </Grid>
                                )
                            }
                            <Grid item xs>
                                <CardContent>
                                    <Typography variant="h6" onClick={() => this.handleOnClickTitle(item)}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {`Number of comments: ${item.num_comments}`}
                                    </Typography>
                                </CardContent>

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <CardActions disableSpacing>
                                <IconButton
                                    onClick={() => this.handleOnSeenPost(item.id)}
                                >
                                    {seen.includes(item.id) ? <VisibilityOffIcon color={'error'} /> : <VisibilityIcon color={'primary'} />}
                                </IconButton>
                                <IconButton
                                    onClick={() => this.handleOnDismissPost(item.id)}
                                >
                                    <DeleteSweepIcon />
                                </IconButton>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Card>
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
        unseenPost: (postId) => dispatch(unseenPost(postId)),
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(ListItem)
