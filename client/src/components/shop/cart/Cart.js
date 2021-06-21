import React, { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

//import { getProduct } from '../../../redux/cart/actions/cartActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Cart = () => {
  //const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  const handleTest = () => console.log('cart');

  return (
    <Fragment>
      <Button variant="primary" onClick={handleTest}>
      <i class='fas fa-shopping-cart'></i>
      </Button>

     {/*  <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
      some stuff
      </Modal> */}
    </Fragment>
  );
}

/* Cart.propTypes = {
  getProduct: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  cart: state.cart
}); */

export default Cart;


