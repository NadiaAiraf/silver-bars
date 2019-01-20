import React, { Component } from 'react';
import './App.css';
import MarketPlace from '../MarketPlace/MarketPlace';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <MarketPlace />
      </div>
    );
  }
}

export default App;
