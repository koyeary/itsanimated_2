import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '../../../redux/inventory/actions/inventoryActions';
import { addToCart } from '../../../redux/cart/actions/cartActions';
import { connect } from 'react-redux';
import Image from './Image';
import Details from './Details';
//import QuickView from './QuickView';
//import AddItem from '../cart/AddItem';
import { Button, Card } from 'react-bootstrap';

const ProductCard = ({ getProducts, inventory: { products } }) => {
  useEffect(() => getProducts());

  return (
    <Card className='Product-wrapper h-100'>
      {products &&
        products.map((product, i) => {
          //const image = product.images[0]
          return (
            <div className='Product' key={product._id}>
              <Image image={product.image_src} />
              <Details name={product.name} price={product.price} />
              <Card.Footer>This will be ACTIONS</Card.Footer>
            </div>
          );
        })}
    </Card>
  );
};

ProductCard.propTypes = {
  getProducts: PropTypes.func.isRequired,
  //addToCart: PropTypes.func.isRequired,
  inventory: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  inventory: state.inventory
});

export default connect(mapStateToProps, { getProducts })(ProductCard);
