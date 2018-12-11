import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MemoryCard from './MemoryCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>
            Memory Game
          </h1>
          <h3>
            Match cards to win
          </h3>
        </header>
        <MemoryCard/>
      </div>
    );
  }
}

export default App;
