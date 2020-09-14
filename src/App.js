import React, { useState, useEffect } from 'react';
import './App.css';
import { Table } from "./components/table/table";
import { Loader } from "./components/loader/loader";
import { fetchData } from './components/api';
import { getSortedRecords } from './components/utils';
import { Pagination } from './components/pagination/pagination';
import { Search } from './components/search/search';
import { Switcher } from './components/switcher/switcher';
import { Popup } from './components/popup/popup';

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
  const [checked, setChecked] = useState("radio-1");
  const [visiblePopup, setVisiblePopup] = useState(false);

  const handleAddRow = (newRow) => {
    setData([newRow, ...data]);
    setVisiblePopup(false);
  };

  const invertDirect = {
    asc: 'desc',
    desc: 'asc'
  }

  const onSort = (column) => {
    setSort({
      column,
      order: sort.column === column
        ? invertDirect[sort.order]
        : 'asc',
    })
  }

  const handleSubmitFilter = value => {
    setFindFilter(value);
    setCurrentPage(1)
  }

  const onVisiblePopup = (visiblePopup) => {
    console.log("лох", visiblePopup)
    setVisiblePopup(visiblePopup);
    console.log("хол", visiblePopup)
  }
  useEffect(
    () => {
      setLoading(true);

      fetchData(checked === "radio-1" ? 32 : 1000)
        .then(response => setData(response))
        .then(() => setLoading(false))
        .catch(console.error)
    },
    [checked],
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
      <Search onSubmit={handleSubmitFilter} />
      <Switcher checked={checked} onChange={setChecked}/>
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onSwitchPage={setCurrentPage}
      />
      {visiblePopup ? <Popup data={currentPosts} onAdd={handleAddRow} /> : null}
      {isLoading
        ? <Loader />
        : <Table data={currentPosts} sort={sort} onSort={onSort} onVisiblePopup={onVisiblePopup}/>
      }
    </div>
  );
}

export default App;

