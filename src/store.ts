import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { stringMiddleware } from './middlewares'

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

const middlewares: any = [thunkMiddleware, stringMiddleware]
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
}

const store = createStore(rootReducer, 
                          applyMiddleware(...middlewares))

export default store