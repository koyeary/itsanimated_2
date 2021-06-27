import React, { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OffCanvas.css';

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Button variant='primary' onClick={handleShow}>
        <i className='fas fa-shopping-cart'></i>
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <p>{localStorage.getItem('cartItems')}</p>
      </Modal>
    </Fragment>
  );
};

export default Cart;
