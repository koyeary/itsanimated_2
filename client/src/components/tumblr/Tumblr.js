import React, { Fragment, useState } from 'react';
import Post from './Post';

const Tumblr = () => {
    const [posts, setPosts] = useState([]);

  return (
    <Fragment>
      <h1>Tumblr</h1>
      <p>hello, world</p>
      <Post/>
    </Fragment>
  );
};

export default Tumblr;
