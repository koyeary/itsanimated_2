import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import { getProducts } from '../../../../../redux/shop/actions/shopActions';
import { Col } from 'react-bootstrap';

import { connect } from 'react-redux';

const TableBody = ({ getProducts, shop: { products } }) => {
  useEffect(() => getProducts());

  return (
    <Fragment>
      <Col md={2}/>
      <Col md={8}>
        <table className='table table-hover table-wrapper table-scrollbar shadow'>
          <thead className='thead-light'>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Category</th>
              <th scope='col'>Price</th>
              <th scope='col'>Image File</th>
              <th scope='col'>Update</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <Fragment>
                <TableRow key={product._id} product={product} />
              </Fragment>
            ))}
          </tbody>
        </table>
      </Col>
      <Col md={2} />
    </Fragment>
  );
};

TableBody.propTypes = {
  getProducts: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  shop: state.shop
});

export default connect(mapStateToProps, { getProducts })(TableBody);
