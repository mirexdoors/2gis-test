import React, {Component} from "react";

import BookItem from "../../components/BookItem/BookItem";

import './BooksList.css';

class BooksList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.books && this.props.books.length) {
      return (
          <div className="booksList__wrapper">
            {this.props.books.map(book =>
                <BookItem
                    item={book}
                    onChangeStatus={this.props.onChangeStatus}
                />
            )}
          </div>
      )
    } else {
      return (<div
          className="booksList__wrapper booksList__wrapper--empty">is
        empty</div>)
    }
  }

}

export default BooksList;

