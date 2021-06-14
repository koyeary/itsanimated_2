import React from 'react';
import AdminLinks from './links/AdminLinks';
import GuestLinks from './links/GuestLinks';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth/actions/authActions';

import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNav = ({ auth: { isAuthenticated }, logout }) => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>animatedtext</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {isAuthenticated ? <AdminLinks/> : <GuestLinks/>}
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

MainNav.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout })(MainNav);
