import {reduxActionTypes} from "../constants/books";

const {
  FETCH_BOOKS,
  FAIL_FETCH_BOOKS,
} = reduxActionTypes;

const initialState = {
  books: {
    toRead: {title: 'To read', items: []},
    inProgress: {title: 'In progress', items: []},
    done: {title: 'Done', items: []},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      state.books.toRead.items = action.payload;
      return state.books;
    case FAIL_FETCH_BOOKS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
