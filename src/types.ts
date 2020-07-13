// Reducer //
import { BookListReducerType } from './reducers/book-list'
import { ShoppingCartReducerType } from './reducers/shopping-cart'
import { FilterReducerType } from './reducers/filter'

export type ReducerType = {
    bookList: BookListReducerType,
    shoppingCart: ShoppingCartReducerType,
    filter: FilterReducerType
}

// Actions //

export type ActionType = {
    type: string,
    payload?: any
}

// Data //

export type BookType = {
    id: number,
    title: string,
    author: string,
    image: string,
    price: number,
    rating: number
}

export type ErrorType = string | boolean

export type CartItemType = {
    id?: number,
    count?: number,
    title?: string,
    total?: number
}

