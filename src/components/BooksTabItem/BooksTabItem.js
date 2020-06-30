import React from "react";
import './BooksTabItem.css';
const BooksTabItem = ({
                        title, amount
}) => {
  return (
    <button  className="BooksFilters__item">
      {title} ({amount})
    </button>
)};
export default BooksTabItem;
