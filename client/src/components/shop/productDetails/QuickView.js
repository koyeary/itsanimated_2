import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Button, Modal } from 'react-bootstrap';

const QuickView = ({ name, price, image, id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Quick View
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <p>{image}</p>
        <p>{price}</p>
        <Modal.Footer>
            <Cart id={id}/>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QuickView;
