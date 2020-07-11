import React, { useEffect, useRef, MutableRefObject } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import App from './app'

import { updateShoppingCart, UpdateShoppingCartActionType } from '../../actions/shopping-cart'
import { setFilter, SetFilterActionType } from '../../actions/filter'
import { setBooks, SetBooksActionType } from '../../actions/book-list'
import { CartItemType, BookType, ReducerType } from '../../types'

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
        => UpdateShoppingCartActionType
    setFilter: (filterBy: string) => SetFilterActionType
    setBooks: (books: Array<BookType>) => SetBooksActionType
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const AppContainer: React.FC<PropsType> = (props) => {

    const saveToLocalStorage = () => {
        localStorage.setItem('cartItems', JSON.stringify(props.cartItems))
        localStorage.setItem('orderTotal', JSON.stringify(props.orderTotal))
        localStorage.setItem('numItems', JSON.stringify(props.numItems))
        localStorage.setItem('filterBy', JSON.stringify(props.filterBy))
        localStorage.setItem('books', JSON.stringify(props.books))
    }

    const getFromLocalStorage = () => {
        if (JSON.parse(localStorage.getItem('cartItems')!) !== null)
            props.updateShoppingCart(
                JSON.parse(localStorage.getItem('cartItems')!),
                JSON.parse(localStorage.getItem('orderTotal')!),
                JSON.parse(localStorage.getItem('numItems')!)
            ) 
        if (JSON.parse(localStorage.getItem('filterBy')!) !== 'all')
            props.setFilter(
                JSON.parse(localStorage.getItem('filterBy')!)
            )
        props.setBooks(JSON.parse(localStorage.getItem('books')!))             
    }

    const isMounted: MutableRefObject<boolean | undefined> = useRef();
    useEffect(() => {
        if (!isMounted.current) {
            getFromLocalStorage()
            isMounted.current = true;
        } else {
            saveToLocalStorage()
        }
    });

    return <App />
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal, numItems },
                           filter: { filterBy },
                           bookList: { books } } : ReducerType) : MapStateToPropsType => {
    return { cartItems, orderTotal, numItems, filterBy, books }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return bindActionCreators({
        updateShoppingCart,
        setFilter,
        setBooks
    }, dispatch);
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>(
                mapStateToProps, 
                mapDispatchToProps)(AppContainer)