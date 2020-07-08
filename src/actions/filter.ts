import { ActionType } from "../types"

export const booksSearch = (term : string) : ActionType => {
    return {
        type: 'BOOKS_SEARCH',
        payload: term
    }
}

export const setFilter = (filterBy : string) : ActionType => {
    return {
        type: 'SET_FILTER',
        payload: filterBy
    }
}