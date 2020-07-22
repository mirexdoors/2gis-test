import {
  reduxActionTypes,
  bookProgressFlowLinks
} from "../constants/books";
import configureStore from "../store/configure-store";

const {
  FETCH_BOOKS,
  FAIL_FETCH_BOOKS,
  CHANGE_BOOK_STATUS,
  SET_BOOK_FILTER,
} = reduxActionTypes;

export const fetchBooks = () => async dispatch => {
  try {
    const response = await fetch('/data/10-items.json');
    const booksData = await response.json();
    return dispatch({
      type: FETCH_BOOKS,
      payload: booksData.items,
    });
  } catch (e) {
    return dispatch({
      type: FAIL_FETCH_BOOKS,
      payload: 'Fetch error',
    });
  }
};

export const changeBookStatus = (bookId, currentStatus) => {
  let currentBooksStore;
  const isFiltered = configureStore().getState().books.filters.size && true;

  if (!isFiltered) currentBooksStore = configureStore().getState().books.books;
   else   currentBooksStore = configureStore().getState().books.filteredBooks;

  const currentListItems = currentBooksStore[currentStatus].items;
  const currentBookIndex = currentListItems
      .findIndex(item => item.id === bookId);

  if (currentBookIndex > -1) {
    const nextStatus = bookProgressFlowLinks[currentStatus];
    currentBooksStore[nextStatus].items
        .push(currentListItems[currentBookIndex]);

    currentListItems.splice(currentBookIndex, 1);
  }

  return (dispatch) => {
    dispatch({type: CHANGE_BOOK_STATUS});
  }
};

export const setBooksFilter = (filterTag) => {
  const currentBooksStore = configureStore().getState().books.books;
  const filteredBooks = configureStore().getState().books.filteredBooks;

  for (const statusList in currentBooksStore) {
    filteredBooks[statusList].items = currentBooksStore[statusList].items.filter(book => {
      return book.tags.some(tag => tag === filterTag)
    });
  }

  return (dispatch) => {
    dispatch({
      type: SET_BOOK_FILTER,
      payload: {tag: filterTag, filteredBooks}
    });
  }
};
