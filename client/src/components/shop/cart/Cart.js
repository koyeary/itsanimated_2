import React, { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { getProduct } from '../../../redux/inventory/actions/inventoryActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Cart = () => {
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

Cart.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { getProduct })(Cart);


