import React from 'react';
import Delete from './buttons/Delete';
import Update from './buttons/Update';

const TableRow = ({ product }) => {

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>${product.price}</td>
      <td>{product.image_src}</td>
      <td>
        <Update product={product}/>
      </td>
      <td>
        <Delete product={product}/>
      </td>
    </tr>
  );
};

export default TableRow;
