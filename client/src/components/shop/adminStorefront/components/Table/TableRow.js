import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';

const TableRow = ({ product, handleClick }) => {
    //props: icon, handleClick, products

    return (
        <tr>
          <th scope='row'><Button onClick={handleClick}><i className='fas fa-minus' /></Button></th>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td>${product.price}</td>
          <td>{product.main_image}</td>
        </tr>
      );
}

TableRow.propTypes = {
    product: PropTypes.object.isRequired
  };
  
  export default connect(null)(TableRow);