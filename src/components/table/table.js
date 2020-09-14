import React, {useState} from 'react';
import './table.css';
import {DataDetails} from "../data-details/data-details";

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
  const { data, sort, onSort, onVisiblePopup } = props;
  const [tableRow, setTableRow] = useState(null);

  return (
    <div className="table-container">
      <button type="submit" onClick={() => onVisiblePopup(true)}>Добавить</button>
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
          {data.map(item => (
            <tr key={item.id + item.email} 
                onClick={() => setTableRow(item)}>
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
      <div>
      
        {tableRow ? <DataDetails person={tableRow} /> : null}
      </div>
    </div>
  );
}

export { Table };
