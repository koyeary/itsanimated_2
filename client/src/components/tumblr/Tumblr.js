import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Post from './Post';
import { getPosts } from '../../redux/blog/actions/blogActions';
import { Button, Col, Container } from 'react-bootstrap';

import { connect } from 'react-redux';

const Tumblr = ({ getPosts, blog: { posts } }) => {


  const loadTumblr = () => {
    getPosts();
    //console.log('click');

  };

  return (
    <Container>
    <Fragment>
      <Col />
       <Button onClick={loadTumblr}>load</Button>
        {posts.map((post) => (
        <Post post={post.photos[0].alt_sizes[1].url}/>
      ))}  
      <Col/>
    </Fragment>
    </Container>
  );
};

Tumblr.propTypes = {
  getPosts: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  blog: state.blog
});

export default connect(mapStateToProps, { getPosts })(Tumblr);
