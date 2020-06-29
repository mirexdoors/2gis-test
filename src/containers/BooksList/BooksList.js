import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as booksActions from '../../actions/Books';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };

    this.fetchBooks = this.props.booksActions.fetchBooks.bind(this);
  }

  componentDidMount() {
    (async () => {
      const result = await this.fetchBooks();
      this.setState(({
             books: result.payload
          }))
    })();
  }

  render() {
    return (
        <div>
          {this.state.books.map(book =>
              `${book.title}`
          )}
        </div>
    );
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

