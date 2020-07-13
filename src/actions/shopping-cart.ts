import { CartItemType } from "../types"

export interface BookAddedToCartActionType {
    type: string,
    payload: number
}
export const bookAddedToCart = (bookId : number) : BookAddedToCartActionType => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export interface AllBooksRemovedFromCartActionType {
    type: string,
    payload: number
}
export const allBooksRemovedFromCart = (bookId : number) : AllBooksRemovedFromCartActionType => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
}

export interface BookRemovedFromCartActionType {
    type: string,
    payload: number
}
export const bookRemovedFromCart = (bookId : number) : BookRemovedFromCartActionType => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
}

export interface UpdateShoppingCartActionType {
    type: string,
    payload: {
        cartItems: Array<CartItemType>,
        orderTotal : number,
        numItems : number
    }
}
export const updateShoppingCart = 
    (cartItems : Array<CartItemType>, orderTotal : number, numItems : number) 
    : UpdateShoppingCartActionType => {
    
        return {
        type: 'UPDATE_SHOPPING_CART',
        payload: {
            cartItems,
            orderTotal,
            numItems
        }
    }
}

export interface ClearShoppingCartActionType {
    type: string
}
export const clearShoppingCart = () : ClearShoppingCartActionType => {
    return {
        type: 'CLEAR_SHOPPING_CART'
    }
}