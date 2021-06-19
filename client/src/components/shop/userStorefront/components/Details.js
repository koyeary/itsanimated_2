import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Details = ({ name, price, image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <p>{image}</p>
        <p>{price}</p>
      </Modal>
    </>
  );
};

export default Details;
