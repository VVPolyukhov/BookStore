const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = newBooks => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksError = error => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export const booksSearch = term => {
    return {
        type: 'BOOKS_SEARCH',
        payload: term
    }
}

export const fetchBooks = bookstoreService => () => dispatch => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(booksError(error)))
}

export const setFilter = filterBy => {
    return {
        type: 'SET_FILTER',
        payload: filterBy
    }
}