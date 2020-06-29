import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as booksActions from '../../actions/Books';

import BookItem from "../../components/BookItem/BookItem";

import './BooksList.css';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.fetchBooks = this.props.booksActions.fetchBooks.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    if (this.props.books.length) {
      return (
          <div className="booksList__wrapper">
            {this.props.books.map(book => <BookItem item={book} />)}
          </div>
      )
    } else {
      return (<div>is empty</div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    booksActions: bindActionCreators(booksActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

