import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import HomeComponent from './../../components/Home/HomeComponent'

import './App.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'font-awesome-animation/dist/font-awesome-animation.min.css'

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

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </div>
    )
  }
}

export default App
