import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';

const GuestLinks = () => {
  return (
    <Fragment>
      <Nav className='me-auto'>
        <Nav.Link href='home'>Home</Nav.Link>
        <Nav.Link href='shop'>Shop</Nav.Link>
        <Nav.Link href='blog'>Tumblr</Nav.Link>
      </Nav>
    </Fragment>
  );
};

export default GuestLinks;
