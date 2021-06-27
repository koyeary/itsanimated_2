import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCart,
  addToCart,
  removeFromCart,
  clearCart
} from '../../../redux/cart/actions/cartActions';
//import Checkout from './Checkout';
//import { checkout } from '../actions/orderActions'
import { Button, Modal, Card } from 'react-bootstrap';
import './OffCanvas.css';

const Cart = ({
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
  cart: { items }
}) => {
  const [show, setShow] = useState(false);
  const [basket, setBasket] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const id = localStorage.id;

  useEffect (() => {
    if (id) {
      loadCart(id);
    }
  });

  const loadCart = async (id) => { 
    await getCart(id);
    setBasket(true);
  };

  const removeItem = (id, itemId) => removeFromCart(id, itemId);
  const emptyCart = (id) => clearCart(id);

  return (
    <Fragment>
      <Button variant='primary' onClick={handleShow}>
        <i className='fas fa-shopping-cart'></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        {basket ? (
          <Modal.Body>
            {items.map((item) => (
              <Card>
                <Card.Body>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Subtitle>{item.price}</Card.Subtitle>
                  <Card.Text>Quantity: {item.quantity}</Card.Text>
                  <Button>Delete</Button>
                  <Button>Checkout</Button>
                </Card.Body>
              </Card>
            ))}
          </Modal.Body>
        ) : null }
      </Modal>
    </Fragment>
  );
};

Cart.propTypes = {
  getCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired
  //checkout: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps, {
  getCart,
  addToCart,
  removeFromCart,
  clearCart
})(Cart);
