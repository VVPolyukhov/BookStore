import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import nock from 'nock'

import { stringMiddleware } from '../../middlewares'
import { 
    setBooks, 
    fetchBooks, 
    booksRequested, 
    booksLoaded,
    booksError
} from '../book-list'
import { BookType } from '../../../types'
import BookstoreService from '../../../services/bookstore-service'

const middlewares = [thunk, stringMiddleware]
const mockStore = configureMockStore(middlewares)
const host = 'http://localhost'

describe('Book-List Actions:', () => {

    describe('should be defined:', () => {
        test('setBooks', () => {
            expect(setBooks).toBeDefined()
        })
        test('fetchBooks', () => {
            expect(fetchBooks).toBeDefined()
        })
    })

    describe('should return a function:', () => {
        test('setBooks', () => {
            expect(setBooks).toBeInstanceOf(Function)
        })
        test('fetchBooks', () => {
            expect(fetchBooks).toBeInstanceOf(Function)
        })
    })

    describe('Sync Actions', () => {
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

    describe('Async Actions:', () => {

        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        })

        let testData: Array<BookType>
        beforeEach(() => {
            testData = [
                {
                    id: 1,
                    title: 'Book',
                    author: 'Author',
                    image: 'url',
                    price: 228,
                    rating: 5
                }
            ]
        })

        test('creates FETCH_BOOKS_SUCCESS when fetching books has been done', () => {

            nock(host)
			    .get('/books.json')
			    .reply(200, testData);

            const expectedActions = [booksRequested(), booksLoaded(testData)]

            const store: any = mockStore({})

            const bookstoreService: BookstoreService = new BookstoreService()
            return store.dispatch(fetchBooks(bookstoreService)())
                .then(() => {
                    expect(store.getActions()).toEqual(expectedActions)
                })
        })

        test('creates FETCH_BOOKS_FAILURE when fetching books was failed', () => {

            // Wrong data, it is not an array of books!
            const testData = {
                id: 1,
                title: 'Book',
                author: 'Author',
                image: 'url',
                price: 228,
                rating: 5
            }

            nock(host)
			    .get('/books.json')
			    .reply(200, testData);
            
            const error = 'Error Message'
            const expectedActions = [booksRequested(), booksError(error)]

            const store: any = mockStore({})

            const bookstoreService: BookstoreService = new BookstoreService()
            return store.dispatch(fetchBooks(bookstoreService)())
                .catch(() => {
                    expect(store.getActions()).toEqual(expectedActions)
                })
        })
    })


})