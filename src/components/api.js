// import {currentPage, pageSize} from "../components/pagination/pagination";

export const fetchData = () => fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
  .then(res => res.json());
