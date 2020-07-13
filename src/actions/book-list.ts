import { BookType, ErrorType, ReducerType } from "../types"
import { ThunkAction } from "redux-thunk"

type BooksRequestedActionType = {
    type: string
}
const booksRequested = () : BooksRequestedActionType => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    }
}

type BooksLoadedActionType = {
    type: string,
    payload: Array<BookType>
}
const booksLoaded = (newBooks: Array<BookType>) : BooksLoadedActionType => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
}

type BooksErrorActionType = {
    type: string,
    payload: ErrorType
}
const booksError = (error : ErrorType) : BooksErrorActionType => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export type SetBooksActionType = {
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
export const fetchBooks = (bookstoreService : any) => 
                          (): ThunkAction<void, ReducerType, unknown, ActionsType> => 
                          dispatch => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then((response : any) => dispatch(booksLoaded(response.data)))
        .catch((error : ErrorType) => dispatch(booksError(error)))
}
