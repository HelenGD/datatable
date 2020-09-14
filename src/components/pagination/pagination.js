import React from 'react';
import './pagination.css';

const Pagination = (props) => {
  const {pageSize, totalCount, currentPage, onSwitchPage} = props;

  const pagesCount = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
      <div className="pagination-container">
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
