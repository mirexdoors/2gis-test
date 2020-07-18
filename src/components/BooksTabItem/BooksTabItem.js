import React from "react";
import './BooksTabItem.css';

const BooksTabItem = ({title, amount, index, isActive, onTabSelect}) => {
  const selectTab = (e) => {
   return  e.currentTarget.value ? onTabSelect( e.currentTarget.value) : false;
  };
  return (
      <button
          className={`booksFilters__item ${isActive ? 'booksFilters__item--active': ''}`}
          value={index}
          onClick={selectTab}
      >
        {title} ({amount})
      </button>
  )
};
export default BooksTabItem;
