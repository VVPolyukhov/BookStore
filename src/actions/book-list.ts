import { BookType, ErrorType, ReducerType } from "../types"
import { ThunkAction } from "redux-thunk"
import BookstoreService from "../services/bookstore-service"

interface BooksRequestedActionType {
    type: string
}
export const booksRequested = () : BooksRequestedActionType => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

interface BooksLoadedActionType {
    type: string,
    payload: Array<BookType>
}
export const booksLoaded = (newBooks: Array<BookType>) : BooksLoadedActionType => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

interface BooksErrorActionType {
    type: string,
    payload: ErrorType
}
export const booksError = (error : ErrorType) : BooksErrorActionType => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export interface SetBooksActionType {
    type: string,
    payload: Array<BookType>
}
export const setBooks = (books : Array<BookType>) : SetBooksActionType => {
    return {
        type: 'SET_BOOKS',
        payload: books
    }
}

type ActionsType = BooksRequestedActionType | BooksLoadedActionType | BooksErrorActionType
export const fetchBooks = (bookstoreService : BookstoreService) => 
                          (): ThunkAction<void, ReducerType, unknown, ActionsType> => 
                          dispatch => {
    dispatch(booksRequested())
    return bookstoreService.getBooks()
        .then((response : any) => dispatch(booksLoaded(response.data)))
        .catch((error : ErrorType) => dispatch(booksError(error)))
}
