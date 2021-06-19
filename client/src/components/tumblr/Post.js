import React, { Fragment } from 'react';
import { Card, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';

const Post = ({ post }) => {
  //const photo = post.embed;
  console.log({post})

  return (
    <Fragment>
      <Card>
      <Card.Img variant="top" src={post} data-orig-height="438" data-orig-width="705" alt="mypost"/>
      <Card.Body>some stuff</Card.Body>
      </Card>
    </Fragment>
  );
};

export default Post;
