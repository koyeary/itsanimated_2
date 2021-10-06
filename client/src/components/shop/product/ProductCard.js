import React, { useEffect, useState } from 'react';
import Image from './Image';
import Details from './Details';
import Actions from './Actions';
import { Card, Row } from 'react-bootstrap';


const ProductCard = ({ id, name, price, image, description }) => {

  return (
    <Card className='text-center shop-card' key={id}>
      <Image image={image} />
      <Details name={name} price={price} description={description} />
      <Actions id={id} />
    </Card>
  );
};

export default ProductCard;

