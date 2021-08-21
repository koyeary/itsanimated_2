import React, { Fragment } from 'react';
import { Button, Card } from 'react-bootstrap';

const Actions = ({ product, addToCart }) => {
  const addToCartHandler = () => {
    addToCart(product._id);
  };

  return (
    <span className='text-right'>
      <Button variant='link' onClick={addToCartHandler}>
        <i class='fas fa-plus' />
      </Button>
    </span>
  );
};

export default Actions;
