import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Details from './Details';
import Actions from './Actions';
import { Card } from 'react-bootstrap';

import { getProducts } from '../../../redux/inventory/actions/inventoryActions';
import { addToCart } from '../../../redux/cart/actions/cartActions';
import { connect } from 'react-redux';

const ProductCard = ({ getProducts, inventory: { products } }) => {
  useEffect(() => getProducts());

  return (
    <Card className='Product-wrapper h-100'>
      {products.map((product, i) => {
        return (
          <div className='Product' key={product._id}>
            <Image image={product.image_src} />
            <Details name={product.name} price={product.price} />
            <Card.Footer>
              <Actions addToCart={addToCart} product={product} />
            </Card.Footer>
          </div>
        );
      })}
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
