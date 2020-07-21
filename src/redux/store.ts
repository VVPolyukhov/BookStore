import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { stringMiddleware } from './middlewares'

import updateBookList from './reducers/book-list'
import updateShoppingCart from './reducers/shopping-cart'
import updateFilter from './reducers/filter'

import { ReducerType, ActionType } from '../types'

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

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export default store