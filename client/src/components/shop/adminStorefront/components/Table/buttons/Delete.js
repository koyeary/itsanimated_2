import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Spinner } from 'react-bootstrap';

import { Button } from 'react-bootstrap';
import { deleteProduct } from '../../../../../../redux/shop/actions/shopActions';

const Delete = ({ deleteProduct, product }) => {
  const handleClick = (e) => {
      const { id }= product._id;
    e.preventDefault();

    //console.log(product);
    deleteProduct({id});
  };

  return (
    <Button onClick={handleClick}>
      <i class='far fa-trash-alt' />
    </Button>
  );
};

Delete.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  shop: PropTypes.object.isRequired
};

export default connect(null, { deleteProduct })(Delete);
