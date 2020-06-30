import React, {Component} from 'react';

import {bindActionCreators} from "redux";
import * as booksActions from "../../actions/Books";
import {connect} from "react-redux";

import BooksTabs from "../BooksTabs/BooksTabs";
import BooksList from "../BooksList/BooksList";

import './Books.css';

class Books extends Component {
  constructor(props) {
    super(props);
    this.fetchBooks = this.props.booksActions.fetchBooks.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    if (this.props.books.books) {
      const allBooks = Object.assign({}, this.props.books.books);
      return (
          <div className="Books Books__wrapper">
            <BooksTabs books={allBooks} />
            {Object.keys(allBooks).map(status =>
              <BooksList books={allBooks[status].items} />
            )}
          </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    books: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    booksActions: bindActionCreators(booksActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);

