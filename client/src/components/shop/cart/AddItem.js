import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { addToCart } from '../../../redux/cart/actions/cartActions';
import { getProduct } from '../../../redux/inventory/actions/inventoryActions';

import { connect } from 'react-redux';

const AddItem = ({ id }) => {
  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCartHandler = () => {
    addToCart(id);
  };
 
  return (
    <Fragment>
          <Button onClick={addToCartHandler}><i class="fas fa-cart-plus"/></Button>
    </Fragment>      
  );
};

export default AddItem;