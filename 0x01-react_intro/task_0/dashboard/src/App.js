import React from 'react';
import holbertonLogo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
  <p>Login to access the full dashboard</p>
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" />
  <label htmlFor="password">Password:</label>
  <input type="password" id="password" name="password" />
  <button>OK</button>
</main>
      <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
