import React, { useState } from 'react';
import './popup.css';

const isNotEmpty = (row) => {
  return Object
    .keys(row)
    .every(key => typeof row[key] === 'object'
      ? isNotEmpty(row[key])
      : Boolean(row[key])
    )
}

const Popup = (props) => {
  const { onAdd } = props;
  const [newRow, setNewRow] = useState({
    id: Math.random(),
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      streetAddress: "",
      city: "",
      state: "",
      zip: "",
    },
    description: "",
  })

  const handleChange = e => {
    setNewRow({
      ...newRow,
      [e.target.name]: e.target.value
    })
  }

  const handleChangeAddress = e => {
    setNewRow({
      ...newRow,
      address: {
        ...newRow.address,
        [e.target.name]: e.target.value,
      },
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNotEmpty(newRow)) {
      onAdd(newRow);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}>
      <div className="popup-container">
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={newRow.firstName}
          onChange={handleChange}
        />

        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={newRow.lastName}
          onChange={handleChange}
        />
        <input
          name="email"
          type="text"
          placeholder="E-mail"
          value={newRow.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          type="text"
          placeholder="Phone"
          value={newRow.phone}
          onChange={handleChange}
        />
        <input
          name="streetAddress"
          type="text"
          placeholder="Street Address"
          onChange={handleChangeAddress}
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          onChange={handleChangeAddress}
        />
        <input
          name="state"
          type="text"
          placeholder="State"
          onChange={handleChangeAddress}
        />
        <input
          name="zip"
          type="text"
          placeholder="Zip"
          onChange={handleChangeAddress}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={newRow.description}
          onChange={handleChange}
        />
      </div>
      {isNotEmpty(newRow) && (
        <button type="submit">Добавить в таблицу</button>
      )}
    </form>
  );
}
export { Popup }
