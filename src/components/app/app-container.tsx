import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './app'

import { updateShoppingCart } from '../../actions/shopping-cart'
import { setFilter } from '../../actions/filter'
import { setBooks } from '../../actions/book-list'
import { CartItemType, BookType, ReducerType, ActionType } from '../../types'

type MapStateToPropsType = {
    cartItems: Array<CartItemType>
    orderTotal: number
    numItems: number
    filterBy: string
    books: Array<BookType>
}

type MapDispatchToPropsType = {
    updateShoppingCart:
        (cartItems: Array<CartItemType>, orderTotal: number, numItems: number)
        => ActionType
    setFilter: (filterBy: string) => ActionType
    setBooks: (books: Array<BookType>) => ActionType
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class AppContainer extends Component<PropsType> {

    saveToLocalStorage = () => {
        localStorage.setItem('cartItems', JSON.stringify(this.props.cartItems))
        localStorage.setItem('orderTotal', JSON.stringify(this.props.orderTotal))
        localStorage.setItem('numItems', JSON.stringify(this.props.numItems))
        localStorage.setItem('filterBy', JSON.stringify(this.props.filterBy))
        localStorage.setItem('books', JSON.stringify(this.props.books))
    }

    getFromLocalStorage = () => {
        if (JSON.parse(localStorage.getItem('cartItems')!) !== null)
            this.props.updateShoppingCart(
                JSON.parse(localStorage.getItem('cartItems')!),
                JSON.parse(localStorage.getItem('orderTotal')!),
                JSON.parse(localStorage.getItem('numItems')!)
            ) 
        if (JSON.parse(localStorage.getItem('filterBy')!) !== 'all')
            this.props.setFilter(
                JSON.parse(localStorage.getItem('filterBy')!)
            )
        this.props.setBooks(JSON.parse(localStorage.getItem('books')!))             
    }

    componentDidMount() {
        this.getFromLocalStorage()
    }

    componentDidUpdate() {
        this.saveToLocalStorage()
    }

    render() {
        return <App />
    }
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal, numItems },
                           filter: { filterBy },
                           bookList: { books } } : ReducerType) : MapStateToPropsType => {
    return { cartItems, orderTotal, numItems, filterBy, books }
}

const mapDispatchToProps = (dispatch: any) : MapDispatchToPropsType => {
    return bindActionCreators({
        updateShoppingCart,
        setFilter,
        setBooks
    }, dispatch);
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>(
                mapStateToProps, 
                mapDispatchToProps)(AppContainer)