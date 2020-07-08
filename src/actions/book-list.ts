import { ActionType, BookType, ErrorType } from "../types"

const booksRequested = () : ActionType => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

const booksLoaded = (newBooks: Array<BookType>) : ActionType => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

const booksError = (error : ErrorType) : ActionType => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export const setBooks = (books : Array<BookType>) : ActionType => {
    return {
        type: 'SET_BOOKS',
        payload: books
    }
}

export const fetchBooks = (bookstoreService : any) => () => (dispatch : any) => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then((response : any) => dispatch(booksLoaded(response.data)))
        .catch((error : ErrorType) => dispatch(booksError(error)))
}
