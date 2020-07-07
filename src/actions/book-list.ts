import { ActionType } from "../reducers"

const booksRequested = () : ActionType => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

type BookType = {
    id: number
    title: string
    author: string
    image: string
    price: number
    rating: number
}

const booksLoaded = (newBooks: Array<BookType>) : ActionType => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

type ErrorType = string | boolean

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
