import React, { useState, useEffect } from 'react';
import './App.css';
import { Table } from "./components/table/table";
import { Loader } from "./components/loader/loader";
import { fetchData } from './components/api';
import { getSortedRecords } from './components/utils';
import { Pagination } from './components/pagination/pagination';
import { Search } from './components/search/search';

const pageSize = 50;

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({
    order: 'asc',
    column: 'id'
  });
  const [findFilter, setFindFilter] = useState("");
  // const [tableRow, setTableRow] = useState(null);

  // const onClickTableRow = (tableRow) => {
  //   setTableRow(tableRow)
  //   console.log(tableRow)
  // }


  const invertDirect = {
    asc: 'desc',
    desc: 'asc'
  }

  const onSort = (columnName, column) => {
    // console.log("ddd", columnName)
    setSort({
      column: columnName,
      order: sort.column === columnName
        ? invertDirect[sort.order]
        : 'asc',
    })
    // console.log("aaa", sort)
  }

  const onSwitchPage = (actualPage) => {
    setCurrentPage(actualPage)
    // console.log("лох", actualPage)
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

  const filteredData = data.filter(row => JSON
    .stringify(row)
    .toLowerCase()
    .includes(findFilter.toLowerCase())
  );

  const totalCount = filteredData.length;

  const sortedData = getSortedRecords(
    filteredData,
    sort,
  )

  const indexOfLastDataItem = currentPage * pageSize;
  const indexOfFirstDataItem = indexOfLastDataItem - pageSize;
  const currentPosts = sortedData.slice(indexOfFirstDataItem, indexOfLastDataItem);

  return (
    <div className="App">
      <Search onSubmit={setFindFilter} />
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onSwitchPage={onSwitchPage}
      />
      {isLoading
        ? <Loader />
        : <Table data={currentPosts} sort={sort} onSort={onSort} />
      }
      {/* {console.log("c", sortedData)}
      {console.log("a", sort)} */}
    </div>
  );
}

export default App;

