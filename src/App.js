import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/Title"

function App() {
  return (
    <div className="App">
      <p>And where will this go</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Codaisseur
        </a>
      </header>
      <p>Where will this go</p>
    </div>
  );
}

export default App;
