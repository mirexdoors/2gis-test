import React, {Component} from "react";

import BookItem from "../../components/BookItem/BookItem";

import './BooksList.css';

class BooksList extends Component {
  render() {
    if (this.props.books && this.props.books.length) {
      return (
          <div className="booksList__wrapper">
            {this.props.books.map(book =>
                <BookItem
                    key={book.id}
                    item={book}
                    status={this.props.status}
                    onChangeStatus={this.props.onChangeStatus}
                />
            )}
          </div>
      )
    } else {
      return (<div
          className="booksList__wrapper booksList__wrapper--empty">List is
        empty</div>)
    }
  }

}

export default BooksList;

