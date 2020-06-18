import React from 'react';

import { BackToStore } from '../buttons'
import ShoppingCartTableRow from '../shopping-cart-table-row'

import './shopping-cart-table.css'

const ShoppingCartTable = ( { items, total, onIncrease, onDecrease, onDelete, onClearCart } ) => {

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
            <th>Удалить книгу</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map((item, idx) => <ShoppingCartTableRow item={item}
                                                           key={idx}
                                                           idx={idx}
                                                           onIncrease={onIncrease}
                                                           onDecrease={onDecrease}
                                                           onDelete={onDelete}/>)
          }
        </tbody>
      </table>

      <div className="total">
        Итого: {total} руб.
      </div>

      <div className='main-actions'>
        <BackToStore/>
        <button className="btn btn-danger"
          onClick={() => onClearCart()}
          >
          Очистить корзину
        </button>
      </div>
    </div>
  )
}

export default ShoppingCartTable