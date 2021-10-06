import React from 'react';
import AdminLinks from './links/AdminLinks';
import GuestLinks from './links/GuestLinks';
import Cart from '../shop/cart/Cart.js';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth/actions/authActions';

import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNav = ({ auth: { isAuthenticated }, logout }) => {
  const logOut = (
    <span className='justify-content-end'>
      <i className='fas fa-user-minus' aria-hidden='true' />
    </span>
  );

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='justify-right'>
      <Container>
        <Navbar.Brand href='#home'>animatedtext</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {isAuthenticated ? <AdminLinks props={logout} /> : <GuestLinks />}
        
          </Navbar.Collapse>
          <Nav.Link>
            {isAuthenticated ? (
              <a onClick={logout} href='#!'>
                Logout Admin {logOut}
              </a>
            ) : (
              <Cart/>
            )}
          </Nav.Link>
       

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

export default connect(mapStateToProps, { logout })(MainNav);
