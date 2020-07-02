import React from 'react'
import PropTypes from 'prop-types'

import './shopping-cart-table-row.scss'

const ShoppingCartTableRow = ({ item, idx, onDecrease, onIncrease, onDelete }) => {

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

ShoppingCartTableRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired, 
  idx: PropTypes.number.isRequired, 
  onDecrease: PropTypes.func.isRequired, 
  onIncrease: PropTypes.func.isRequired, 
  onDelete: PropTypes.func.isRequired
}

export default ShoppingCartTableRow