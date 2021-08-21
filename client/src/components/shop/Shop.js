import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './product/ProductCard';

import { getProducts } from '../../redux/inventory/actions/inventoryActions';
import { connect } from 'react-redux';

import { Container, Col, Row } from 'react-bootstrap';

const Shop = ({ getProducts, inventory: { products } }) => {
  useEffect(() => getProducts());

  return (
    <Container className='px-4 mt-5'>
      <Row>
        {products.map((product, i) => {
          return (
            <Col sm={12} md={4} className='py-4'>
              <ProductCard
                id={product._id}
                image={product.image_src}
                name={product.name}
                price={product.price}
                category={product.category}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
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
