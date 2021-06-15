import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Spinner } from 'react-bootstrap';

import { Button } from 'react-bootstrap';
import { updateProduct } from '../../../../../../redux/shop/actions/shopActions';

const Update = ({ updateProduct, product }) => {
  const handleClick = (e) => {
    e.preventDefault();

    updateProduct(product);
  };

  return (
    <Button onClick={handleClick}>
      <i class='far fa-edit' />
    </Button>
  );
};

Update.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

export default connect(null, { updateProduct })(Update);