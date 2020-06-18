import updateBookList from '../book-list'

import { setBooks } from '../../actions/book-list'

describe('updateBookList function:', () => {

    test('should be defined', () => {
        expect(updateBookList).toBeDefined()
    })

    test('should return an object', () => {
        expect(updateBookList).toBeInstanceOf(Object)
    })

    test('should set books', () => {

        const state = {
            bookList: {
                books: [],
                loading: false,
                error: false
            }
        };

        const books = [
            {
                id: 1,
                title: "Земное притяжение",
                author: "Татьяна Устинова",
                image: "https://cv9.litres.ru/sbc/30087292_cover_185-elektronnaya-kniga-tatyana-ustinova-zemnoe-prityazhenie.jpg",
                price: 317,
                rating: 1
            },
            {
                id: 2,
                title: "Империя должна умереть",
                author: "Михаил Зыгарь",
                image: "https://cv0.litres.ru/sbc/30804904_cover_185-elektronnaya-kniga-mihail-zygar-imperiya-dolzhna-umeret.jpg",
                price: 741,
                rating: 3
            }
        ]

        const result = {
            books,
            loading: false,
            error: false
        };

        expect(updateBookList(state, setBooks(books))).toEqual(result)
    })
})