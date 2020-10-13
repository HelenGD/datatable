import React, { useState } from 'react';
import './search.css';

const Search = (props) => {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  }

  return (
    <form className="search-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Найти</button>
    </form>
  );
}
export { Search }