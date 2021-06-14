import React, { Fragment } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const GuestLinks = () => {
  return (
    <Fragment>
      <Nav className='me-auto'>
        <Nav.Link href='#features'>Home</Nav.Link>
        <Nav.Link href='#pricing'>Shop</Nav.Link>
        <Nav.Link href='#pricing'>Tumblr</Nav.Link>
        <Nav.Link href='#pricing'>Checkout</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href='#deets'>More deets</Nav.Link>
        <Nav.Link eventKey={2} href='#memes'>
          Checkout
        </Nav.Link>
      </Nav>
    </Fragment>
  );
};

export default GuestLinks;
