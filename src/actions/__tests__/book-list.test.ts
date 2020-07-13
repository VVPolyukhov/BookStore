import {
    setBooks
} from '../book-list'
import { BookType } from '../../types'

describe('Book-List Actions:', () => {

    describe('should be defined:', () => {
        test('setBooks', () => {
            expect(setBooks).toBeDefined()
        })
    })

    describe('should return an object:', () => {
        test('setBooks', () => {
            expect(setBooks).toBeInstanceOf(Object)
        })
    })

    test('setBooks', () => {
        const books: Array<BookType> = [
            {
                id: 1,
                title: 'Book',
                author: 'Author',
                image: 'url',
                price: 228,
                rating: 5
            }
        ]
        expect(setBooks(books)).toEqual({
            type: 'SET_BOOKS',
            payload: books
        })
    })
})