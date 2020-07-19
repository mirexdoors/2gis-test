import React, {Component} from "react";
import BooksTabItem
  from '../../components/BooksTabItem/BooksTabItem';
import './BooksTabs.css';

class BooksTabs extends Component {
   render() {
    if (this.props.books) {
      const books = Object.assign({}, this.props.books);
      return (
          <div className="booksFilters booksFilters__list">
            {Object.keys(books).map((status, index) =>
                <BooksTabItem
                    key={index}
                    title={books[status].title}
                    amount={books[status].items ? books[status].items.length : 0}
                    index={index}
                    isActive={index === this.props.currentIndex}
                    onTabSelect={this.props.onTabSelect}
                />
            )}
          </div>
      );
    }
  }
}

export default BooksTabs;
