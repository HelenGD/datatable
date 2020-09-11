import React, { useState } from 'react';
import './table.css';

const tableCells = [
  'id',
  'firstName',
  'lastName',
  'email',
  'phone',
  'address',
  'description',
];

const Table = (props) => {
  const { data, sort, onSort } = props;

  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr>
            {tableCells.map((column) => (
              <th
                key={column}
                className="table-cell"
                onClick={() => onSort(column)}
              >
                {column}
                {sort.column === column && (
                  <span>
                    {sort.order === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
          {/* <tr>
            <th className="table-cell">id</th>
            <th className="table-cell" onClick={() => setClick(isClick)}>firstName</th>
            <th className="table-cell" onClick={() => setClick(isClick)}>lastName</th>
            <th className="table-cell" onClick={() => setClick(isClick)}>email</th>
            <th className="table-cell" onClick={() => setClick(isClick)}>phone</th>
            <th className="table-cell" onClick={() => setClick(isClick)}>address</th>
            <th className="table-cell" onClick={() => setClick(isClick)}>description</th>
          </tr> */}
          {data.map(item => (
            <tr key={item.id + item.email}>
              <td className="table-column">{item.id}</td>
              <td className="table-column">{item.firstName}</td>
              <td className="table-column">{item.lastName}</td>
              <td className="table-column">{item.email}</td>
              <td className="table-column">{item.phone}</td>
              <td className="table-column">
                {Object.values(item.address).join(', ')}
              </td>
              <td className="table-column">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Table };

