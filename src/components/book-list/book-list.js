import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookListItem from '../book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import { fetchBooks, bookAddedToCart } from '../../actions'
import { withBookstoreService } from '../hoc'
import { compose } from '../../utils'
import SearchPanel from '../search-panel'

import './book-list.css'

const BookList = ({ books, term, onAddedToCart }) => {

    const searchBooks = (books, term) => {
        if (term.length === 0) {
          return books;
        }
        return books.filter(book => {
          return (book.title.toLowerCase().indexOf(term) > -1 || 
            book.author.toLowerCase().indexOf(term) > -1);
        });
      }

    const visibleBooks = searchBooks(books, term.toLowerCase())

    return (
        <div className='search-panel'>
            <SearchPanel />
            <ul className='book-list'>
                {
                    visibleBooks.map(book => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book}
                                    onAddedToCart={() => onAddedToCart(book.id)} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const { books, loading, error, term, onAddedToCart } = this.props

        if (loading)
            return <Spinner />

        if (error)
            return <ErrorIndicator />

        return <BookList 
            books={books}
            term={term}
            onAddedToCart={onAddedToCart} />
    }
}

const mapStateToProps = ({ bookList: { books, loading, error, term } }) => {
    return { books, loading, error, term }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
    }, dispatch);
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)