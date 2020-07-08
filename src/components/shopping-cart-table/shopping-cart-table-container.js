import React from 'react';
import { connect } from 'react-redux'

import ShoppingCartTable from './shopping-cart-table'
import { BackToStore } from '../buttons'

import {
    allBooksRemovedFromCart,
    bookRemovedFromCart,
    bookAddedToCart,
    clearShoppingCart
} from '../../actions/shopping-cart'

const ShoppingCartTableContainer = ({ items, total, onIncrease, onDecrease, onDelete, onClearCart }) => {

    if (items.length === 0)
        return (
            <div className='text-center empty-shopping-cart'>
                <h3>Ваша корзина пуста.</h3>
                <p>
                    Выберите нужный Вам товар из каталога интернет-магазина
                    и добавьте его в корзину.
                </p>
                <BackToStore />
            </div>
        )
    
    return <ShoppingCartTable items={items}
                              total={total}
                              onIncrease={onIncrease}
                              onDecrease={onDecrease}
                              onDelete={onDelete}
                              onClearCart={onClearCart}/>
}

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
    onClearCart: clearShoppingCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTableContainer)
