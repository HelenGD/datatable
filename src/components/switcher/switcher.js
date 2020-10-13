import React from 'react';
import './switcher.css';

const Switcher = (props) => {
  const {checked, onChange} = props; 
  return (
      <div>
        <input 
          id="small-data" 
          type="radio" 
          name="radio" 
          value="radio-1"
          checked={checked === 'radio-1'}
          onChange={(e) => onChange(e.target.value)}
        />
        <label htmlFor="small-data">Мало данных</label>
        <input 
          id="big-data" 
          type="radio" 
          name="radio" 
          value="radio-2"
          checked={checked === 'radio-2'}
          onChange={(e) => onChange(e.target.value)}
        />
        <label htmlFor="big-data">Много данных</label>
      </div>
  );
}
export {Switcher}
