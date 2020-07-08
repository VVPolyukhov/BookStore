import { ActionType, CartItemType } from "../types"

export const bookAddedToCart = (bookId : number) : ActionType => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export const allBooksRemovedFromCart = (bookId : number) : ActionType => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
}

export const bookRemovedFromCart = (bookId : number) : ActionType => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
}

export const updateShoppingCart = 
    (cartItems : Array<CartItemType>, orderTotal : number, numItems : number) : ActionType => {
    return {
        type: 'UPDATE_SHOPPING_CART',
        payload: {
            cartItems,
            orderTotal,
            numItems
        }
    }
}

export const clearShoppingCart = () : ActionType => {
    return {
        type: 'CLEAR_SHOPPING_CART'
    }
}