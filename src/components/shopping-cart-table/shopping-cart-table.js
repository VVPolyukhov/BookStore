import React from 'react';
import { connect } from 'react-redux'

import { BackToStore } from '../buttons'
import { allBooksRemovedFromCart,
         bookRemovedFromCart,
         bookAddedToCart,
         clearShoppingCart } from '../../actions/shopping-cart'

import './shopping-cart-table.css'

const ShoppingCartTable = ( { items, total, onIncrease, onDecrease, onDelete, onClearCart } ) => {

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

  const renderRow = (item, idx) => {
    const { id, title, count, total } = item
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total} руб.</td>
        <td className='table-actions'>
          <button className="btn btn-outline-success btn-sm"
                  onClick={() => onIncrease(id)}>
            <i className="fa fa-plus-circle" />
          </button>
          <button className="btn btn-outline-warning btn-sm"
                  onClick={() => onDecrease(id)}>
            <i className="fa fa-minus-circle" />
          </button>
          <button className="btn btn-outline-danger btn-sm"
                  onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Ваша корзина:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Книга</th>
            <th>Количество</th>
            <th>Общая сумма</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>

      <div className="total">
        Итого: {total} руб.
      </div>

      <div className='main-actions'>
        <BackToStore/>
        <button className="btn btn-outline-danger"
          onClick={() => onClearCart()}>
          Очистить корзину
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ( { shoppingCart: { cartItems, orderTotal }} ) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
