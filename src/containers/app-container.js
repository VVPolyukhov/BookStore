import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from '../components/app'

import { updateShoppingCart } from '../actions/shopping-cart'
import { setFilter } from '../actions/filter'
import { setBooks } from '../actions/book-list'

class AppContainer extends Component {

    saveToLocalStorage = () => {
        localStorage.setItem('cartItems', JSON.stringify(this.props.cartItems))
        localStorage.setItem('orderTotal', JSON.stringify(this.props.orderTotal))
        localStorage.setItem('numItems', JSON.stringify(this.props.numItems))
        localStorage.setItem('filterBy', JSON.stringify(this.props.filterBy))
        localStorage.setItem('books', JSON.stringify(this.props.books))
    }

    getFromLocalStorage = () => {
        if (JSON.parse(localStorage.getItem('cartItems')) !== null)
            this.props.updateShoppingCart(
                JSON.parse(localStorage.getItem('cartItems')),
                JSON.parse(localStorage.getItem('orderTotal')),
                JSON.parse(localStorage.getItem('numItems'))
            ) 
        if (JSON.parse(localStorage.getItem('filterBy')) !== 'all')
            this.props.setFilter(
                JSON.parse(localStorage.getItem('filterBy'))
            )
        this.props.setBooks(JSON.parse(localStorage.getItem('books')))             
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
                           bookList: { books } }) => {
    return { cartItems, orderTotal, numItems, filterBy, books }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateShoppingCart,
        setFilter,
        setBooks
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)