import React from 'react';
import './pagination.css';

const Pagination = (props) => {
  const {pageSize, totalCount, currentPage, onSwitchPage} = props;
  // console.log(pageSize, totalCount, currentPage, onSwitchPage)

  const pagesCount = Math.ceil(totalCount / pageSize);
  // console.log(pagesCount)
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
            onClick={() => onSwitchPage(page)}>{page}</button>
        })}
      </div>
  );
}
export {Pagination};
