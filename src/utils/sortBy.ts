import orderBy from 'lodash/orderBy'
import { BookType } from "../types"

const sortBy = (books : Array<BookType>, filterBy : string): Array<BookType> => {
    switch (filterBy) {
        case 'all':
            return books
        case 'popularity':
            return orderBy(books, 'rating', 'desc')
        case 'low-price':
            return orderBy(books, 'price', 'asc')
        case 'high-price':
            return orderBy(books, 'price', 'desc')
        case 'bookName':
            return orderBy(books, 'title', 'asc')
        case 'author':
            return orderBy(books, 'author', 'asc')
        default:
            return books
    }
}

export default sortBy