import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCart from './shopping-cart'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>YOUR SHOPPING BAG</h1>
        <ShoppingCart></ShoppingCart>
      </React.Fragment>
    );
  }
}

export default App;
