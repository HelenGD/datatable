import React from 'react';
import './table.css';
import {TableItem} from '../table-item/table-item';

const Table = () => {

  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr>
            <th className="table-cell">id</th>
            <th className="table-cell">firstName</th>
            <th className="table-cell">lastName</th>
            <th className="table-cell">email</th>
            <th className="table-cell">phone</th>
            <th className="table-cell">adress</th>
            <th className="table-cell">description</th>
          </tr>
          {/* {products.map(product => (
            <TableItem key={product.id} product={product} />
          ))} */}
          <TableItem />
        </tbody>
      </table>
    </div>
  );
}

export {Table};