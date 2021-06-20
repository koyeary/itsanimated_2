import React, { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const CartModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <i class='fas fa-shopping-cart'></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
      some stuff
      </Modal>
    </>
  );
}

export default CartModal;


