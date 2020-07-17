import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

import AppContainer from './components/app'
import ErrorBoundry from './components/error-boundry'
import BookstoreService from './services/bookstore-service'
import { BookstoreServiceProvider } from './components/bookstore-service-context'

import store from './redux/store'

const bookstoreService = new BookstoreService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <AppContainer />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
)