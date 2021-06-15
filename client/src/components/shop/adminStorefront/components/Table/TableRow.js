import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';

const TableRow = ({ product }) => {
    //props: icon, handleClick, products

    return (
        <tr>
          <th scope='row'><Button><i className='fas fa-minus' /></Button></th>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td>${product.price}</td>
          <td>{product.img_src}</td>
        </tr>
      );
};

TableRow.propTypes = {
    shop: PropTypes.object.isRequired
  };
  
  export default TableRow;