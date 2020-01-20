import React from 'react';
import { Typography, Grid, Link } from '@material-ui/core';

const NoItemSelected = () => {
    return <Typography variant='h3'>Select a post from the list.</Typography>
}

const PostDetails = (props) => {
    const { details } = props;

    return (
        <React.Fragment>
            {details && details.id ? (
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h4'>{details.title}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='body1'>Author: {details.author}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={details.thumbnail} alt={details.title} />
                    </Grid>
                    <Grid item xs={12}>
                        <Link href="#">
                            {details.url}
                        </Link>
                    </Grid>
                </Grid>
            ) : <NoItemSelected />}
        </React.Fragment>
    );
};

export default PostDetails;