export const reduxActionTypes = {
  FETCH_BOOKS: 'FETCH_BOOKS',
  FAIL_FETCH_BOOKS: 'FAIL_FETCH_BOOKS',
  CHANGE_BOOK_STATUS: 'CHANGE_BOOK_STATUS',
  SET_BOOK_FILTER: 'SET_BOOK_FILTER'
};
export const bookProgressFlowLinks = {
  toRead: 'inProgress',
  inProgress: 'done',
  done: 'toRead'
};
