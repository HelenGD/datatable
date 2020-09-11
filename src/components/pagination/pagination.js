import React from 'react';
import './pagination.css';

const Pagination = (props) => {
  const {pageSize, totalCount, currentPage, onSwitchPage} = props;
  console.log(pageSize, totalCount, currentPage)

  const pagesCount = Math.ceil(totalCount / pageSize);
  console.log(pagesCount)
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
      <div>
        {pages.map(page => {
          return <button 
            key={page + 1} 
            className={currentPage === page ? "pagination-button-active" : "pagination-button"} 
            type="button" 
            onClick={() => onSwitchPage(currentPage)}>{page}</button>
        })}
        {/* <button className="button pagination-button" type="button">1</button>
        <button className="button pagination-button-active" type="button">2</button> */}
      </div>
  );
}
export {Pagination};
