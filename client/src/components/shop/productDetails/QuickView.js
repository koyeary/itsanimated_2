import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const QuickView = ({ name, price, image }) => {
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
            <Button>Add to Cart</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QuickView;
