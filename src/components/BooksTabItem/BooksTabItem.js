import React from "react";
import './BooksTabItem.css';
const BooksTabItem = ({
  item,
}) => {
  return (
    <button value={item.id} className="BooksFilters__item">
      {item.title}
    </button>
)};
export default BooksTabItem;
