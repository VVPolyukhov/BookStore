import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Card } from 'semantic-ui-react'
import orderBy from 'lodash/orderBy'

import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import { withBookstoreService } from '../hoc'
import { compose } from '../../utils'

import { fetchBooks } from '../../actions/book-list'

import './book-list.css'

const BookList = ({ books, onAddedToCart }) => {
    return (
        <Grid.Column stretched width={13}>
            <Card.Group itemsPerRow={4}>
                {
                    books.map((book, index) => {
                        return (
                            <BookListItem key={index}
                                          book={book} />
                        )
                    })
                }
            </Card.Group>
        </Grid.Column>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props

        if (loading)
            return <Spinner />

        if (error)
            return <ErrorIndicator />

        return <BookList 
            books={books}
            onAddedToCart={onAddedToCart} />
    }
}

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'all':
            return books
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

const searchBooks = (books, term) => {
    if (term.length === 0) {
        return books;
    }
    return books.filter(book => {
        return (book.title.toLowerCase().indexOf(term) > -1 ||
            book.author.toLowerCase().indexOf(term) > -1);
    });
}

const mapStateToProps = ({ bookList: { books, loading, error }, 
                           filter:   { term, filterBy } }) => {
    return { 
        books: books &&
                sortBy(
                    searchBooks(books, term.toLowerCase()), 
                    filterBy),
        loading, 
        error
    }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService)
    }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)