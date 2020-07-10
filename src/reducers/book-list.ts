import { ReducerType, ActionType, BookType } from '../types'

export type BookListReducerType = {
  books: Array<BookType>,
  loading: boolean,
  error: boolean | null
}

const updateBookList = (state: ReducerType, action: ActionType): BookListReducerType => {

  const initialState: BookListReducerType = {
    books: [],
    loading: true,
    error: null
  }

  if (state === undefined) {
    return initialState
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state.bookList,
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state.bookList,
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state.bookList,
        books: [],
        loading: false,
        error: action.payload
      };

    case 'SET_BOOKS':
      return {
        ...state.bookList,
        books: action.payload
      }

    default:
      return state.bookList;
  }
};

export default updateBookList;
