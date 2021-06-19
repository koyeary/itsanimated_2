import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '../../../redux/shop/actions/shopActions';
import { connect } from 'react-redux';
import Details from './components/Details';

const Product = ({ getProducts, shop: { products } }) => {
  useEffect(() => getProducts());

  return (
    <div className='Product-wrapper'>
      {products &&
        products.map((product, i) => {
          //const image = product.images[0]
          return (
            <div className='Product' key={product._id}>
              {/* 							{image ? (
								<img src={product.image_src} alt={`${product.name} product shot`} />
							) : null} */}
              <div>
                <h4 className='Product__title'>{product.name}</h4>
                <p className='Product__price'>${product.price}</p>
              </div>
              <Details
                name={product.name}
                price={product.price}
                image={product.image_src}
              />
            </div>
          );
        })}
    </div>
  );
};

Product.propTypes = {
  getProducts: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  shop: state.shop
});

export default connect(mapStateToProps, { getProducts })(Product);
