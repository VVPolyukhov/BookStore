import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import { stringMiddleware, loggerMiddleware } from './middlewares'

const store = createStore(reducer, 
                          applyMiddleware(
                              thunkMiddleware,
                              stringMiddleware,
                              loggerMiddleware
                          ))

export default store