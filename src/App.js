import React, { Component } from 'react';
import Header from './components/Header.js'
import Splash from './components/Splash.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
