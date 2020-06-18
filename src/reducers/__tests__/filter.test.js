import updateFilter from '../filter'

import { setFilter, booksSearch } from '../../actions/filter'

describe('updateFilter function:', () => {

    let state

    beforeEach(() => {
        state = {
            filter: {
                term: '',
                filterBy: 'all'
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