export const reduxActionTypes = {
  FETCH_BOOKS: 'FETCH_BOOKS',
  FAIL_FETCH_BOOKS: 'FAIL_FETCH_BOOKS',
  CHANGE_BOOK_STATUS: 'CHANGE_BOOK_STATUS',
};
export const bookProgressFlowLinks = {
  toRead: 'inProgress',
  inProgress: 'done',
  done: 'toRead'
};
