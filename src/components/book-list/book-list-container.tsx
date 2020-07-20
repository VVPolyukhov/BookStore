import React, { useEffect } from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import BookList from './book-list'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'
import { withBookstoreService } from '../hoc'

import { compose } from '../../utils'

import { fetchBooks } from '../../redux/actions/book-list'
import { ReducerType, BookType } from '../../types'
import { getFilteredBooks, getLoadingStatus, getErrorStatus } from '../../redux/selectors/book-list'

interface MapStateToPropsType {
    books: Array<BookType>,
    loading: boolean,
    error: boolean | null
}

interface MapDispatchToPropsType {
    fetchBooks: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const BookListContainer: React.FC<PropsType> = 
    ({ books, loading, error, fetchBooks }) => {

    useEffect(() => {
        fetchBooks()
    }, [fetchBooks])

    if (loading)
        return <Spinner />

    if (error)
        return <ErrorIndicator />

    return <BookList books={books} />
}

const mapStateToProps = (state: ReducerType): MapStateToPropsType => {
    return {
        books: getFilteredBooks(state),
        loading: getLoadingStatus(state),
        error: getErrorStatus(state)
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