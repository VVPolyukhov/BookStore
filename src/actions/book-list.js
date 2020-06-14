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

export const setBooks = books => {
    return {
        type: 'SET_BOOKS',
        payload: books
    }
}

export const fetchBooks = bookstoreService => () => dispatch => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then(response => dispatch(booksLoaded(response.data)))
        .catch(error => dispatch(booksError(error)))
}
