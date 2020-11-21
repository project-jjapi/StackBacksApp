import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes'
import './normalize.scss'
import './style.css'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from './redux/reducers/index'
const initialState = {}

/**
 *
 * Apply middleware Redux Thunk for async actions with devtool enhancer
 */
const middlewareEnhancers = applyMiddleware(reduxThunk)
const composeEnhancers = compose(
  middlewareEnhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducers, initialState, composeEnhancers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
