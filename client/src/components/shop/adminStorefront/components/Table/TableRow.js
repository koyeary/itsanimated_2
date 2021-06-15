import React from 'react';
import PropTypes from 'prop-types';
import Delete from './buttons/Delete';
import Update from './buttons/Update';

const TableRow = ({ product }) => {
  //props: icon, handleClick, products

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>${product.price}</td>
      <td>{product.img_src}</td>
      <td>
        <Update product={product}/>
      </td>
      <td>
        <Delete product={product}/>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  shop: PropTypes.object.isRequired
};

export default TableRow;
