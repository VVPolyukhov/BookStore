export type BooksSearchActionType = {
    type: string,
    payload: string
}
export const booksSearch = (term : string) : BooksSearchActionType => {
    return {
        type: 'BOOKS_SEARCH',
        payload: term
    }
}

export type SetFilterActionType = {
    type: string,
    payload: string
}
export const setFilter = (filterBy : string) : SetFilterActionType => {
    return {
        type: 'SET_FILTER',
        payload: filterBy
    }
}