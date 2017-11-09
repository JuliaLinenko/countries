import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './index'
import promiseMiddleware from 'redux-promise-middleware'

export default function configureStore(initialState = {}) {
  // Compose final middleware
  let middleware = applyMiddleware(thunk, promiseMiddleware())

  // Create final store and subscribe router in debug env ie. for devtools
  const store = createStore(rootReducer, initialState, middleware)

  if (module.hot) {
    module.hot.accept('./index', () => {
      const nextRootReducer = require('./index').default

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
