import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const Actions = ({ product, addToCart }) => {
  const addToCartHandler = () => {
    addToCart(product._id);
  };

  return (
    <Fragment>
      <Button onClick={addToCartHandler}>
        <i class='fas fa-plus' />
      </Button>
{/*       <Button /> */}
    </Fragment>
  );
};

export default Actions;
