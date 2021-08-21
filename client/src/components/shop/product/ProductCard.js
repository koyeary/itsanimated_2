import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Details from './Details';
import Actions from './Actions';
import { Card } from 'react-bootstrap';

import { getProducts } from '../../../redux/inventory/actions/inventoryActions';
import { addToCart } from '../../../redux/cart/actions/cartActions';
import { connect } from 'react-redux';

const ProductCard = ({ id, name, price, image }) => {
  useEffect(() => getProducts());

  return (
    <Card className='Product-wrapper h-100' key={id}>
            <Image image={image} />
            <Details name={name} price={price} />
            <Card.Footer>
              <Actions addToCart={addToCart} product={id} />
            </Card.Footer>
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
