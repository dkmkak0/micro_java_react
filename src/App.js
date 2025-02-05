import logo from './logo.svg';
import './App.css';
import React from 'react'; // Thêm dòng này
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload nha em ok nè nha.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React nè
        </a>
      </header>
    </div>
  );
}

export default App;
