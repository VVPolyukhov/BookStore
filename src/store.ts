import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { stringMiddleware, loggerMiddleware } from './middlewares'

import updateBookList from './reducers/book-list'
import updateShoppingCart from './reducers/shopping-cart'
import updateFilter from './reducers/filter'

import { ReducerType, ActionType } from './types'

const rootReducer: any = (state: ReducerType, action: ActionType): ReducerType => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action),
        filter: updateFilter(state, action)
    }
}

const store = createStore(rootReducer, 
                          applyMiddleware(
                              thunkMiddleware,
                              stringMiddleware,
                              loggerMiddleware
                          ))

export default store