import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Spinner } from 'react-bootstrap';

import { Button, Modal, Form } from 'react-bootstrap';
import { updateProduct } from '../../../../../../redux/shop/actions/shopActions';

const Update = ({ updateProduct, product }) => {
  const initialState = {
    name: product.name,
    price: product.price,
    category: product.category,
    image_src: product.image_src,
    _id: product._id
  };
  const [formData, setFormData] = useState(initialState);
  const [show, setShow] = useState(false);

  const { name, price, category, image_src, _id } = formData;

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    updateProduct(formData);
    alert(`product ${_id} updated`);
    handleClose();
  };


  const formBody = (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Enter item name"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Product ID</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="name"
          value={_id}
          placeholder={_id}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>category</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="category"
          value={category}
          onChange={onChange}
          placeholder="Ex: hat"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="price"
          value={price}
          onChange={onChange}
          placeholder="20.00"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control
          className="form-control-lg"
          name="image_src"
          value={image_src}
          onChange={onChange}
          placeholder="Image File"
          required
        />
      </Form.Group>

      <div className="text-center">
          <Button variant="primary" className="mx-3" onSubmit={onSubmit} type="submit">
            Submit
          </Button>
          <Button variant="secondary" className="mx-3" onClick={handleClose}>
            Close
          </Button>
      </div>
    </Form>
  );

  return (
    <Fragment>
    <Button
      data-toggle="button"
      value="update"
      onClick={handleShow}
    >
      <i class='far fa-edit' />
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update shop item</Modal.Title>
        </Modal.Header>
        <Modal.Body>{formBody}</Modal.Body>
      </Modal>
    </Fragment>
  );
};

Update.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

export default connect(null, { updateProduct })(Update);