import {reduxActionTypes} from "../constants/books";

const {
  FETCH_BOOKS,
  FAIL_FETCH_BOOKS,
} = reduxActionTypes;

export const fetchBooks =() => async dispatch => {
  try {
    const response = await fetch('/data/10-items.json');
    const booksData = await response.json();
    return dispatch({type: FETCH_BOOKS, payload: booksData.items,});
  } catch (e) {
    return dispatch({
      type: FAIL_FETCH_BOOKS,
      payload: 'Fetch error',
    });
  }
};
