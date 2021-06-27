import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { addToCart } from '../../../redux/cart/actions/cartActions';
import { getProduct } from '../../../redux/inventory/actions/inventoryActions';

import { connect } from 'react-redux';

const QuickView = ({ id, name, price, image }) => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = () => {
    //setCart(JSON.stringify(id));
    window.localStorage.setItem('product', id);
    setCart(id);
  };
 
  return (
    <Fragment>
      <Button variant='primary' onClick={handleShow}>
      <i class="fas fa-cart-plus"/>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <p>{image}</p>
        <p>{price}</p>
        <Modal.Footer>
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default QuickView;
