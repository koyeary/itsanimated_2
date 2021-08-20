import React, { useState, useEffect, Fragment } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { addToCart } from '../../../redux/cart/actions/cartActions';

const AddItem = ({ id }) => {

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