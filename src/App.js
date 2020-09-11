import React, { useState, useEffect } from 'react';
import './App.css';
import { Table } from "./components/table/table";
import { Loader } from "./components/loader/loader";
import { fetchData } from './components/api';
import { getSortedRecords } from './components/utils';
import { Pagination } from './components/pagination/pagination';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(32);
  const [pageSize, setPageSize] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({
    order: 'asc', 
    column: 'id'
  });

  const onSort = (column) => {
    console.log("ddd", column)
    setSort(sort)
    console.log("aaa", sort)
  }

  const onSwitchPage = (currentPage) => {
    setCurrentPage(currentPage)
    console.log("лох", currentPage)
  }


  useEffect(
    () => {
      setLoading(true);
    
      fetchData()
        .then(response => setData(response))
        .then(() => setLoading(false));
    },
    [],
  );

  const sortedData = getSortedRecords(
    data,
    sort,
  )


  return (
    <div className="App">
      <Pagination  totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} onSwitchPage={onSwitchPage}/>
      {isLoading 
        ? <Loader /> 
        : <Table data={sortedData} sort={sort} onSort={onSort} />
      }
      {console.log("c", sortedData)}
      {console.log("a", sort)}

    </div>
  );
}

export default App; 

