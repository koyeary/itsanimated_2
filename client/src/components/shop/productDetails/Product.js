import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '../../../redux/inventory/actions/inventoryActions';
import { connect } from 'react-redux';
import QuickView from './QuickView';

const Product = ({ getProducts, inventory: { products } }) => {
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
              <QuickView
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
  inventory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  inventory: state.inventory
});

export default connect(mapStateToProps, { getProducts })(Product);
