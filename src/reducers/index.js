import updateBookList from './book-list'
import updateShoppingCart from './shopping-cart'
import updateFilter from './filter'

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    filter: updateFilter(state, action)
  }
}

export default reducer
