import React, {Component} from "react";
import {bindActionCreators} from "redux";
import * as booksActions from "../../actions/books";
import {connect} from "react-redux";

import './BookItem.css';


class BookItem extends Component {
  constructor(props) {
    super(props);

    this.changeStatus = (e) => e.currentTarget.value && this.props.onChangeStatus(e.currentTarget.value);

    this.setFilter = this.props.booksActions.setBooksFilter.bind(this);


    this.statusText = {
      toRead: 'start reading',
      inProgress: 'finish reading',
      done: 'return in «to read»',
    };
  }

  render() {
    return (
        <div className="bookItem">
          <div
              className="bookItem__author">{this.props.item.author}</div>
          <div className="bookItem__nameWrapper">
            <div className="bookItem__name">
              {this.props.item.title}
            </div>
            <button
                value={this.props.item.id}
                name="change-status"
                className="bookItem__btn"
                onClick={this.changeStatus}
            >
            <span
                className="bookItem__btnText">{this.statusText[this.props.status]}</span> &rarr;
            </button>
          </div>
          <div className="bookItem__description">
            {this.props.item.description}
          </div>
          <ul className="bookItem__tags">
            {this.props.item.tags.length > 0 && this.props.item.tags.map(tag =>
                <li key={tag} className="bookItem__tag">
                  <button onClick={()=> this.setFilter(tag)} value={tag}
                          className="bookItem__tagButton">#{tag}</button>
                </li>
            )}
          </ul>
        </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    booksActions: bindActionCreators(booksActions, dispatch),
  };
}

export default connect(false, mapDispatchToProps)(BookItem);
