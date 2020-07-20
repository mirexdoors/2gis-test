import React, {Component} from 'react';

import {bindActionCreators} from "redux";
import * as booksActions from "../../actions/books";
import {connect} from "react-redux";

import BooksTabs from "../BooksTabs/BooksTabs";
import BooksList from "../BooksList/BooksList";
import FilterBlock from "../../components/FilterBlock/FilterBlock";

import './Books.css';


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
    this.fetchBooks = this.props.booksActions.fetchBooks.bind(this);
    this.changeBookStatus = this.props.booksActions.changeBookStatus.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }

  render() {
    if (this.props.books.books) {

      const allBooks = Object.assign({}, this.props.books.books);
      const bookListComponents = Object.keys(allBooks)
          .map(status => <BooksList
                  books={allBooks[status].items}
                  status={status}
                  onChangeStatus={(bookId) => this.changeBookStatus(bookId, status)}
              />
          );
      return (
          <div className="books books__wrapper">
            <BooksTabs
                books={allBooks}
                currentIndex={Number(this.state.tabIndex)}
                onTabSelect={(index) => this.setState({tabIndex: index})}
            />
            {this.props.books.filters.size  ?  <FilterBlock tags={[...this.props.books.filters]} /> : ""}
            {[...bookListComponents][this.state.tabIndex]}
          </div>
      );
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

export default connect(mapStateToProps, mapDispatchToProps)(Books);

