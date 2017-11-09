import React, { Component } from 'react'

import logo from './../../public/logo.svg'
import './HomeComponent.css'

class HomeComponent extends Component {
  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
      </div>
    )
  }
}

export default HomeComponent
