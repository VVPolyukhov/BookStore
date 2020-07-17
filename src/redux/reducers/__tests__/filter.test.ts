import updateFilter from '../filter'

import { setFilter, booksSearch } from '../../actions/filter'
import { ReducerType } from '../../types'

describe('updateFilter function:', () => {

    let state: ReducerType

    beforeEach(() => {
        state = {
            bookList: {
                books: [],
                loading: false,
                error: false
            },
            filter: {
                term: '',
                filterBy: 'all'
            },
            shoppingCart: {
                cartItems: [], 
                orderTotal: 0, 
                numItems: 0
            }
        };
    })

    test('should be defined', () => {
        expect(updateFilter).toBeDefined()
    })

    test('should return an object', () => {
        expect(updateFilter).toBeInstanceOf(Object)
    })

    test('should set the filter', () => {

        const result = {
            term: '',
            filterBy: 'low-price'
        };

        expect(updateFilter(state, setFilter('low-price'))).toEqual(result)
    })

    test('should search correctly', () => {

        const result = {
            term: 'Достоевский',
            filterBy: 'all'
        };

        expect(updateFilter(state, booksSearch('Достоевский'))).toEqual(result)
    })
})