import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

const Post = ({ post }) => {

    return(
        <Fragment>
            <Card>
                <Card body>This is a post</Card>
            </Card>
        </Fragment>
    )
}

export default Post;