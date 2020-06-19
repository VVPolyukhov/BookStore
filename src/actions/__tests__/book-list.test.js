import {
    setBooks
} from '../book-list'

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
        const books = [
            {
                id: 1,
                title: 'Book 1'
            }
        ]
        expect(setBooks(books)).toEqual({
            type: 'SET_BOOKS',
            payload: books
        })
    })
})