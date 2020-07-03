import React from "react";
import './BooksTabItem.css';

const BooksTabItem = ({title, amount, index, onTabSelect}) => {
  const selectTab = (e) => {
    if (e.currentTarget.value)
      onTabSelect(e.currentTarget.value);
  };
  return (
      <button
          className="BooksFilters__item"
          value={index}
          onClick={selectTab}
      >
        {title} ({amount})
      </button>
  )
};
export default BooksTabItem;
