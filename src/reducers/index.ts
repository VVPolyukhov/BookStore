import updateBookList, { BookListReducerType } from './book-list'
import updateShoppingCart, { ShoppingCartReducerType } from './shopping-cart'
import updateFilter, { FilterReducerType } from './filter'
import { ActionType } from '../types'

export type ReducerType = {
  bookList: BookListReducerType
  shoppingCart: ShoppingCartReducerType
  filter: FilterReducerType
}

const reducer = (state: ReducerType, action: ActionType) : ReducerType => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    filter: updateFilter(state, action)
  }
}

export default reducer
