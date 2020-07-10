import React, { Component } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import orderBy from 'lodash/orderBy'

import BookList from './book-list'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import { withBookstoreService } from '../hoc'

import { compose } from '../../utils'

import { fetchBooks } from '../../actions/book-list'
import { ReducerType, BookType } from '../../types'

type MapStateToPropsType = {
    books: Array<BookType>
    loading: boolean
    error: boolean | null
}

type MapDispatchToPropsType = {
    fetchBooks: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class BookListContainer extends Component<PropsType> {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const { books, loading, error } = this.props

        if (loading)
            return <Spinner />

        if (error)
            return <ErrorIndicator />

        return <BookList books={books} />
    }
}

const sortBy = (books : Array<BookType>, filterBy : string) => {
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

const searchBooks = (books : Array<BookType>, term : string) => {
    if (term.length === 0) {
        return books;
    }
    return books.filter(book => {
        return (book.title.toLowerCase().indexOf(term) > -1 ||
            book.author.toLowerCase().indexOf(term) > -1);
    });
}

const mapStateToProps = ({ bookList: { books, loading, error }, 
                           filter:   { term, filterBy } } : ReducerType) 
                        : MapStateToPropsType => {
    return { 
        books: books &&
                sortBy(
                    searchBooks(books, term.toLowerCase()), 
                    filterBy),
        loading, 
        error
    }
}

const mapDispatchToProps = (dispatch: Dispatch, { bookstoreService } : any) 
                            : MapDispatchToPropsType => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService)
    }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>
    (mapStateToProps, mapDispatchToProps)
)(BookListContainer)