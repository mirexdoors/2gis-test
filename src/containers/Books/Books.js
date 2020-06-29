import React, {Component} from 'react';
import './Books.css';

import BooksTabs from "../BooksTabs/BooksTabs";
import BooksList from "../BooksList/BooksList";

class Books extends Component {
  render() {
    return (
        <div className="Books Books__wrapper">
          <BooksTabs/>
          <BooksList/>
        </div>
    );
  }
}

export default Books;
