import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Details from './Details';
import Actions from './Actions';
import { Card, Row } from 'react-bootstrap';

import { getProducts } from '../../../redux/inventory/actions/inventoryActions';
import { addToCart } from '../../../redux/cart/actions/cartActions';
import { connect } from 'react-redux';

const ProductCard = ({ id, name, price, image, category }) => {
  useEffect(() => getProducts());

  return (
    <Card className='text-center' key={id}>
      <Image image={image} />
        <Details name={name} price={price} category={category} />
      <Actions addToCart={addToCart} product={id} />
    </Card>
  );
};

ProductCard.propTypes = {
  getProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  inventory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  inventory: state.inventory
});

export default connect(mapStateToProps, { getProducts })(ProductCard);
