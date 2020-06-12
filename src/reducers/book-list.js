const updateBookList = (state, action) => {

  if (state === undefined) {
    return {
      books: [],
      loading: true,
      error: null,
      term: '',
      filterBy: 'all'
    };
  }

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state.bookList,
        books: [],
        loading: true,
        error: null,
        term: ''
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state.bookList,
        books: action.payload,
        loading: false,
        error: null,
        term: ''
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state.bookList,
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

    case 'SET_FILTER':
      return {
        ...state.bookList,
        filterBy: action.payload
      }

    default:
      return state.bookList;
  }
};

export default updateBookList;
