const updateFilter = (state, action) => {

    if (state === undefined) {
      return {
        term: '',
        filterBy: 'all'
      };
    }
  
    switch (action.type) {
      case 'BOOKS_SEARCH': 
        return {
          ...state.filter,
          term: action.payload
        }
  
      case 'SET_FILTER':
        return {
          ...state.filter,
          filterBy: action.payload
        }
  
      default:
        return state.filter;
    }
  };
  
  export default updateFilter;