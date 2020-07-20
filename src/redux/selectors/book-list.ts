import { createSelector } from 'reselect'

import { ReducerType, BookType } from "../../types"
import { getFilterBy, getTerm } from './filter'
import { sortBy, searchBooks } from '../../utils'
import { getCartItems } from './shopping-cart'

export const getBookList = (state: ReducerType): Array<BookType> => {
    return state.bookList.books
}

export const getLoadingStatus = (state: ReducerType): boolean => {
    return state.bookList.loading
}

export const getErrorStatus = (state: ReducerType): boolean | null => {
    return state.bookList.error
}

// Additional selectors //

export const getBookIdFromProps = (state: ReducerType, props: any): number => {
    return props.book.id
}

export const getFilteredBooks = createSelector(
    getBookList,
    getFilterBy,
    getTerm,
    (books, filterBy, term) => sortBy(
        searchBooks(books, term.toLowerCase()),
        filterBy
    )
)

export const getParticularBookById = createSelector(
    [ getCartItems, getBookIdFromProps ],
    (cartItems, id) => cartItems.filter(item => item.id === id).shift() 
)

