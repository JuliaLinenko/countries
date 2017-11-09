import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './containers/App/App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './redux/configureStore'

const initialState = window.__INITIAL_STATE__ || {}
const store = configureStore(initialState)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
