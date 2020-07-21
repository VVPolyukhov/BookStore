import React, { useEffect, useRef, MutableRefObject } from 'react'
import { connect } from 'react-redux'

import App from './app'

import { updateShoppingCart, UpdateShoppingCartActionType } from '../../redux/actions/shopping-cart'
import { setFilter, SetFilterActionType } from '../../redux/actions/filter'
import { setBooks, SetBooksActionType } from '../../redux/actions/book-list'

import { CartItemType, BookType, ReducerType } from '../../types'

import { getCartItems, getOrderTotal, getNumItems } from '../../redux/selectors/shopping-cart'
import { getBookList } from '../../redux/selectors/book-list'
import { getFilterBy } from '../../redux/selectors/filter'

interface MapStateToPropsType {
    cartItems: Array<CartItemType>,
    orderTotal: number,
    numItems: number,
    filterBy: string,
    books: Array<BookType>
}

interface MapDispatchToPropsType {
    updateShoppingCart:
        (cartItems: Array<CartItemType>, orderTotal: number, numItems: number)
        => UpdateShoppingCartActionType,
    setFilter: (filterBy: string) => SetFilterActionType,
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

const mapStateToProps = (state : ReducerType) : MapStateToPropsType => {
    return { 
        cartItems: getCartItems(state), 
        orderTotal: getOrderTotal(state), 
        numItems: getNumItems(state), 
        filterBy: getFilterBy(state), 
        books: getBookList(state) 
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>(
                mapStateToProps, { updateShoppingCart, setFilter, setBooks })(AppContainer)