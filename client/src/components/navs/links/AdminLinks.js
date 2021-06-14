import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const AdminLinks = () => {
  return (
    <Nav className='me-auto'>
      <Nav.Link href='#features'>Main</Nav.Link>
      <Nav.Link href='#pricing'>Dashboard</Nav.Link>
      <NavDropdown title='Manage' id='collasible-nav-dropdown'>
        <NavDropdown.Item href='#action/3.1'>Shop</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.2'>Tumblr</NavDropdown.Item>
        <NavDropdown.Item href='#action/3.3'>Admin Profiles</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default AdminLinks;
