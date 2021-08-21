import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './product/ProductCard';

import { getProducts } from '../../redux/inventory/actions/inventoryActions';
import { connect } from 'react-redux';

const Shop = ({ getProducts, inventory: { products } }) => {
  useEffect(() => getProducts());

  return (
    <Fragment>
      {products.map((product, i) => {
        return <ProductCard id={product._id} image={product.image_src} name={product.name} price={product.price} />;
      })}
    </Fragment>
    /* <Card className='Product-wrapper h-100'>
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
    </Card> */
  );
};

Shop.propTypes = {
  getProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  inventory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  inventory: state.inventory
});

export default connect(mapStateToProps, { getProducts })(Shop);
