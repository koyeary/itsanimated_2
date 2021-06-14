import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Login from '../auth/Login';

const Dialog = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
        <Login/>
        </Modal>
      </>
    );
  }
  
export default Dialog;