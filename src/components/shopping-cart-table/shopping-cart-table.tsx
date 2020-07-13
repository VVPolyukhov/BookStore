import React from 'react'
import { BackToStore } from '../buttons'
import ShoppingCartTableRow from '../shopping-cart-table-row'

import './shopping-cart-table.scss'
import { ActionType } from '../../types'

interface CartItemType {
  id: number,
  count: number,
  title: string,
  total: number
}

interface PropsType {
  items: Array<CartItemType>, 
  total: number, 
  onIncrease: () => ActionType, 
  onDecrease: () => ActionType, 
  onDelete: () => ActionType, 
  onClearCart: () => void
}

const ShoppingCartTable : React.FC<PropsType> = 
  ( { items, total, onIncrease, onDecrease, onDelete, onClearCart } ) => {
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
            items.map((item: CartItemType, idx: number) =>
              <ShoppingCartTableRow item={item}
                key={idx}
                idx={idx}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onDelete={onDelete} />)
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