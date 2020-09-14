export const fetchData = (rows) => fetch(`http://www.filltext.com/?rows=${rows}&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
  .then(res => res.json());
