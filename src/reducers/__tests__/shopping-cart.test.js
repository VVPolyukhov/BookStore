import updateShoppingCart from '../shopping-cart'

import { bookAddedToCart, 
         bookRemovedFromCart, 
         allBooksRemovedFromCart } from '../../actions/shopping-cart'

describe('updateShoppingCart function:', () => {

    let state

    beforeEach(() => {
        state = {
            bookList: { 
                books: [
                    {
                        id: 1,
                        title: "Земное притяжение",
                        author: "Татьяна Устинова",
                        image: "https://cv9.litres.ru/sbc/30087292_cover_185-elektronnaya-kniga-tatyana-ustinova-zemnoe-prityazhenie.jpg",
                        price: 317,
                        rating: 1
                    }
                ]
            }
        }
    })

    test('should be defined', () => {
        expect(updateShoppingCart).toBeDefined()
    })

    test('should return an object', () => {
        expect(updateShoppingCart).toBeInstanceOf(Object)
    })

    test('should add the book to the cart', () => {

        state['shoppingCart'] = {
            cartItems: [],
            orderTotal: 0,
            numItems: 0
        }


        const result = {
            cartItems: [
                {
                    id: 1,
                    title: "Земное притяжение",
                    count: 1,
                    total: 317
                }
            ],
            orderTotal: 317,
            numItems: 1
        }

        expect(updateShoppingCart(state, bookAddedToCart(1))).toEqual(result)
    })

    test('should remove the book from the cart', () => {

        state['shoppingCart'] = {
            cartItems: [
                {
                    id: 1,
                    title: "Земное притяжение",
                    count: 1,
                    total: 317
                }
            ],
            orderTotal: 317,
            numItems: 1
        }

        const result = {
            cartItems: [],
            orderTotal: 0,
            numItems: 0
        }

        expect(updateShoppingCart(state, bookRemovedFromCart(1))).toEqual(result)
    })

    test('should remove all books of certain type from the cart', () => {

        state['shoppingCart'] = {
            cartItems: [
                {
                    id: 1,
                    title: "Земное притяжение",
                    count: 2,
                    total: 317
                }
            ],
            orderTotal: 634,
            numItems: 2
        }


        const result = {
            cartItems: [],
            orderTotal: 0,
            numItems: 0
        }

        expect(updateShoppingCart(state, allBooksRemovedFromCart(1))).toEqual(result)
    })
})
