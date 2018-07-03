import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import reducers from './reducers'

// Configure store to persist beyond hot reloading
// https://github.com/parcel-bundler/parcel/issues/314
function configureStore() {
  if (!module.hot) return createStore(reducers)

  if (window.store == null) {
    window.store = createStore(reducers)
    return window.store
  }
  if (process.env.NODE_ENV === "development") {
    window.store.replaceReducer(reducers)
  }
  return window.store
}

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'))  
