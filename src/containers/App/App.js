import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import HomeComponent from './../../components/Home/HomeComponent'
import './App.css'

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  get content() {
    // TODO: Router with routes should be injected here later
    return <HomeComponent />
  }

  render() {
    return (
      <div className="app">
        <Provider store={this.props.store}>
          { this.content }
        </Provider>
      </div>
    )
  }
}

export default App
