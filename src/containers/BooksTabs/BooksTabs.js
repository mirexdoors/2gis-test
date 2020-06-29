import React, {Component} from "react";
import BooksTabItem
  from '../../components/BooksTabItem/BooksTabItem';
import './BooksTabs.css';

class BooksTabs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const filterItems = [
      {id: 1, title: 'To read'},
      {id: 2, title: 'In progress'},
      {id: 3, title: 'Done'},
    ];
    return (
        <div className="BooksFilters BooksFilters__list">
          {filterItems.map(filterItem =>
              <BooksTabItem
                  item={filterItem}
                  title={filterItem.title}
                  id={filterItem.id}
              />
          )}
        </div>

    );
  }
}


export default BooksTabs;
