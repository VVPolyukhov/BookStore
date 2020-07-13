import React from 'react'

import './shopping-cart-table-row.scss'
import { CartItemType, ActionType } from '../../types'

interface PropsType {
  item: CartItemType, 
  idx: number, 
  onDecrease: (id : number | undefined) => ActionType, 
  onIncrease: (id : number | undefined) => ActionType, 
  onDelete: (id : number | undefined) => ActionType
}

const ShoppingCartTableRow : React.FC<PropsType> = 
  ({ item, idx, onDecrease, onIncrease, onDelete }) => {

    const { id, title, count, total } = item
    
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>
          <button className="btn btn-sm"
                  onClick={() => onDecrease(id)}>
            <i className="fa fa-minus-circle" />
          </button>
          &nbsp;&nbsp;
          {count}
          &nbsp;&nbsp;
          <button className="btn btn-sm"
                  onClick={() => onIncrease(id)}>
            <i className="fa fa-plus-circle" />
          </button>
        </td>
        <td>{total} руб.</td>
        <td className='table-actions'>
          <button className="btn btn-outline-danger btn-sm"
                  onClick={() => onDelete(id)}>
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
}

export default ShoppingCartTableRow