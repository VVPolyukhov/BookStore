import { ReducerType } from '.'
import { ActionType } from '../types';

export type FilterReducerType = {
  term: string,
  filterBy: string
}

const updateFilter = (state: ReducerType, action: ActionType): FilterReducerType => {

  const initialState: FilterReducerType = {
    term: '',
    filterBy: 'all'
  }

  if (state === undefined) {
    return initialState
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