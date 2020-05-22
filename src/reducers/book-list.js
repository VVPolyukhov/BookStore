const updateBookList = (state, action) => {

  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
      term: ''
    };
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        loading: true,
        error: null,
        term: ''
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: action.payload,
        loading: false,
        error: null,
        term: ''
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload,
        term: ''
      };

    case 'BOOKS_SEARCH': 
      return {
        ...state.bookList,
        term: action.payload
      }

    default:
      return state.bookList;
  }
};

export default updateBookList;
