import React, {Component} from "react";
import {bindActionCreators} from "redux";
import * as booksActions from "../../actions/books";
import {connect} from "react-redux";

import './FilterBlock.css';

class FilterBlock extends Component {
  constructor(props) {
    super(props);

    this.clearFilters = this.props.booksActions.clearFilters.bind(this);
  }

  render() {
    return (
        <div className='filter filter__wrap'>
          <div className="filter__title">Filtered by tags:&nbsp;</div>
          <ul className="bookItem__tags">
            {this.props.tags.map(tag=>
                  <li key={tag} className="bookItem__tag">
                    <div className="bookItem__tagButton">#{tag}</div>
                  </li>
                )}
        </ul>
          <button className='filter__reset' onClick={()=>this.clearFilters()}>(clear)</button>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    booksActions: bindActionCreators(booksActions, dispatch),
  };
}

export default connect(false, mapDispatchToProps)(FilterBlock);
