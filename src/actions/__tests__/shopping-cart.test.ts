import { bookAddedToCart,
         updateShoppingCart,
         clearShoppingCart } from '../shopping-cart'
import { CommentAction } from 'semantic-ui-react'
import { CartItemType } from '../../types'

describe('Shopping-Cart Actions:', () => {

    describe('should be defined:', () => {
        test('bookAddedToCart', () => {
            expect(bookAddedToCart).toBeDefined()
        })
        test('updateShoppingCart', () => {
            expect(updateShoppingCart).toBeDefined()
        })
        test('clearShoppingCart', () => {
            expect(clearShoppingCart).toBeDefined()
        })
    })

    describe('should return an object:', () => {
        test('bookAddedToCart', () => {
            expect(bookAddedToCart).toBeInstanceOf(Object)
        })
        test('updateShoppingCart', () => {
            expect(updateShoppingCart).toBeInstanceOf(Object)
        })
        test('clearShoppingCart', () => {
            expect(clearShoppingCart).toBeInstanceOf(Object)
        })
    })

    test('bookAddedToCart', () => {
        expect(bookAddedToCart(2)).toEqual({
            type: 'BOOK_ADDED_TO_CART',
            payload: 2
        })
    })

    test('updateShoppingCart', () => {

        const cartItems = [
            {
                id: 1,
                title: 'Book',
                price: 200,
                count: 1
            }
        ]

        expect(updateShoppingCart(cartItems, 200, 1)).toEqual({
            type: 'UPDATE_SHOPPING_CART',
            payload: {
                cartItems,
                orderTotal: 200,
                numItems: 1
            }
        })
    })

    test('clearShoppingCart', () => {
        expect(clearShoppingCart()).toEqual({
            type: 'CLEAR_SHOPPING_CART'
        })
    })
})