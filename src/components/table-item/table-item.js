import React from 'react';
import './table-item.css';

const TableItem = (props) => {
  const {product} = props;
  return (
      <tr>
        <td className="table-column"></td>
        <td className="table-column"></td>
        <td className="table-column"></td>
        <td className="table-column"></td>
        <td className="table-column"></td>
        <td className="table-column"></td>
        <td className="table-column"></td>
      </tr>
  );
}

export {TableItem};
