import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Foo from './Foo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Foo x="1" />
          To get started, edit <code>src/App.js</code> and save to reload.
        </div>
      </div>
    );
  }
}

App.propTypes = PropTypes.object;

export default App;
