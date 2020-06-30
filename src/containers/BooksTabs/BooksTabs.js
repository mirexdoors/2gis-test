import React, {Component} from "react";
import BooksTabItem
  from '../../components/BooksTabItem/BooksTabItem';
import './BooksTabs.css';

class BooksTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.books) {
      const books =  Object.assign({}, this.props.books);
      return (
          <div className="BooksFilters BooksFilters__list">
            {Object.keys(books).map(status =>
                <BooksTabItem
                    title={books[status].title}
                    amount={books[status].items ? books[status].items.length : 0}
                />
            )}
          </div>
      );
    }
  }
}


export default BooksTabs;
