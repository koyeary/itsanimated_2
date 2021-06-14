import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const GuestLinks = () => {
  return (
    <Nav className='me-auto'>
      <Nav.Link href='#features'>Home</Nav.Link>
      <Nav.Link href='#pricing'>Shop</Nav.Link>
      <Nav.Link href='#pricing'>Tumblr</Nav.Link>
      <Nav.Link href='#pricing'>Checkout</Nav.Link>
    </Nav>
  );
};

export default GuestLinks;