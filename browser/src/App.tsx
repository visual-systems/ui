import React from 'react';
import logo from './logo.svg';
import './App.css';

import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

const App: React.FC = () => {
  return (
    <SplitterLayout> 
      <div>
        <h2>Navigation</h2>
      </div>
      <SplitterLayout vertical>
        <div className="App">
          <h2>Graph</h2>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <div>
          <h2>Properties</h2>
        </div>
      </SplitterLayout>
    </SplitterLayout>
  );
}

export default App;
