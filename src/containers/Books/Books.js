import React, {Component} from 'react';
import './Books.css';

import BooksTabs from "../BooksTabs/BooksTabs";
import BooksList from "../BooksList/BooksList";

class Books extends Component {
  constructor(props) {
    super(props)
  }

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
