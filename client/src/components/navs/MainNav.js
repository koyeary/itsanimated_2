import React from 'react';
import AdminLinks from './links/AdminLinks';
import GuestLinks from './links/GuestLinks';

import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';

const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>animatedtext</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
        {/*   <AdminLinks /> */}
          <GuestLinks />
          <Nav>
            <Nav.Link href='#deets'>More deets</Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
