import React, { Fragment } from 'react';
import { Button, Card } from 'react-bootstrap';

const Actions = ({ product, addToCart }) => {
  const addToCartHandler = () => {
    addToCart(product._id);
  };

  return (
    <span className='text-right'>
      <Button variant='link' onClick={addToCartHandler}>
        <i className='fas fa-plus shop' />
      </Button>
    </span>
  );
};

export default Actions;
