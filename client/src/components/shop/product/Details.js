import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

const Details = ({ name, price, category }) => {
  return (
    <Fragment>
      <Card.Body className='pt-3 pb-0'>
        {name}
        <br />
        {category}
        <br />
        ${price}
      </Card.Body>
    </Fragment>
  );
};

export default Details;
