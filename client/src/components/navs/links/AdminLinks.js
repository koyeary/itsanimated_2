import React, { Fragment } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const AdminLinks = () => {

  return (
    <Fragment>
      <Nav className='me-auto'>
        <Nav.Link href='#features'>Full Site</Nav.Link>
        <Nav.Link href='#pricing'>Dashboard</Nav.Link>
        <NavDropdown title='Manage' id='collasible-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1'>Shop</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>Tumblr</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3'>Admin Profiles</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Fragment>
  );
};

export default AdminLinks;
