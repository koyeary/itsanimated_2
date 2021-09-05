import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

const Details = ({ name, price, description }) => {
  return (
    <Fragment>
      <Card.Body className='pt-3 pb-0'>
        {name}
        <br />
        {description}
        <br />
        ${price}
      </Card.Body>
    </Fragment>
  );
};

export default Details;
