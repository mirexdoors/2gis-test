import {reduxActionTypes} from "../constants/books";

const {
  FETCH_BOOKS,
  FAIL_FETCH_BOOKS,
} = reduxActionTypes;

const initialState = {
  books: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return state.books = action.payload;
    case FAIL_FETCH_BOOKS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
