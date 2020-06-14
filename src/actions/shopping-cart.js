export const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
}

export const allBooksRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookId
    }
}

export const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
}

export const updateShoppingCart = (cartItems, orderTotal, numItems) => {
    return {
        type: 'UPDATE_SHOPPING_CART',
        payload: {
            cartItems,
            orderTotal,
            numItems
        }
    }
}

export const clearShoppingCart = () => {
    return {
        type: 'CLEAR_SHOPPING_CART'
    }
}