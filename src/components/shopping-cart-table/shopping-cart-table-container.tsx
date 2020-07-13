import React from 'react';
import { connect } from 'react-redux'

import ShoppingCartTable from './shopping-cart-table'
import { BackToStore } from '../buttons'

import {
    allBooksRemovedFromCart,
    bookRemovedFromCart,
    bookAddedToCart,
    clearShoppingCart,
    ClearShoppingCartActionType
} from '../../actions/shopping-cart'
import { ReducerType } from '../../types';

interface MapStateToPropsType {
    items: Array<any>,
    total: number
}

interface MapDispatchToPropsType {
    onIncrease: any,
    onDecrease: any,
    onDelete: any,
    onClearCart: () => ClearShoppingCartActionType
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const ShoppingCartTableContainer: React.FC<PropsType> = 
    ({ items, total, onIncrease, onDecrease, onDelete, onClearCart }) => {

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

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }: ReducerType)
                        : MapStateToPropsType => {
    return {
        items: cartItems,
        total: orderTotal
    }
}

const mapDispatchToProps : MapDispatchToPropsType = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart,
    onClearCart: clearShoppingCart
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, ReducerType>
                (mapStateToProps, mapDispatchToProps)(ShoppingCartTableContainer)
