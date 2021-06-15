import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Spinner } from 'react-bootstrap';

import { Button, Modal } from 'react-bootstrap';
import { deleteProduct } from '../../../../../../redux/shop/actions/shopActions';

const Delete = ({ deleteProduct, product }) => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDelete = (e) => {
    e.preventDefault();

    deleteProduct(product._id);
    handleClose();
  };

  return (
    <Fragment>
      <Button onClick={handleShow}>
        <i class='far fa-trash-alt' />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Delete <span>{product.name}</span>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete item #{product._id}?
          <p>
            <br />
            Once this action is done, it's really done.
          </p>
        </Modal.Body>
        <Button onClick={handleDelete}>
          <i class='far fa-trash-alt' />
        </Button>
      </Modal>
    </Fragment>
  );
};

Delete.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

export default connect(null, { deleteProduct })(Delete);
