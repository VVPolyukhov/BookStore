export const booksSearch = term => {
    return {
        type: 'BOOKS_SEARCH',
        payload: term
    }
}

export const setFilter = filterBy => {
    return {
        type: 'SET_FILTER',
        payload: filterBy
    }
}