import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import { addToCart } from '../../../redux/cart/actions/cartActions';

const Actions = ({ id }) => {

  return (
    <span className='text-right'>
      <Button variant='link' onClick={addToCart(id)}>
        <i className='fas fa-plus shop-icon'/>
      </Button>
    </span>
  );
};

export default Actions;
