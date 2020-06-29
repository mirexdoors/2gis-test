import React from "react";
import './BookItem.css';

const BookItem = ({item,}) => {
  return (
      <div className="bookItem">
        <div
            className="bookItem__author">{item.author}</div>
        <div className="bookItem__nameWrapper">
          <div className="bookItem__name">
            {item.title}
          </div>
          <button className="bookItem__btn"><span className="bookItem__btnText">start  reading</span> &rarr;
            </button>
        </div>
        <div className="bookItem__description">
          {item.description}
        </div>
        <ul className="bookItem__tags">
          {item.tags.length > 0 && item.tags.map(tag =>
              <li className="bookItem__tag">#{tag}</li>
          )}
        </ul>

      </div>
  )
};

export default BookItem;
