import { booksSearch, setFilter } from '../filter'

describe('Filter Actions:', () => {

    describe('should be defined:', () => {
        test('booksSearch', () => {
            expect(booksSearch).toBeDefined()
        })
        test('setFilter', () => {
            expect(setFilter).toBeDefined()
        })
    })

    describe('should return an object:', () => {
        test('booksSearch', () => {
            expect(booksSearch).toBeInstanceOf(Object)
        })
        test('setFilter', () => {
            expect(setFilter).toBeInstanceOf(Object)
        })
    })

    test('booksSearch', () => {
        const term = 'Достоевский'
        expect(booksSearch(term)).toEqual({
            type: 'BOOKS_SEARCH',
            payload: term
        })
    })

    test('setFilter', () => {
        const filterBy = 'low-price'
        expect(setFilter(filterBy)).toEqual({
            type: 'SET_FILTER',
            payload: filterBy
        })
    })
})