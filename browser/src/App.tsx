import React from 'react';
import logo from './logo.svg';
import './App.css';

import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

class App extends React.Component {

  state = {
    view: 'ide'
  };

  maximise = () => {
    console.log('max');
    this.setState({ view: 'graph' });
  };

  ide = () => {
    this.setState({ view: 'ide' });
  };

  graph = () => {
    if(this.state.view === 'ide') {
      return 80;
    } else {
      return 100;
    }
  }

  render = () => {
    return (
      <div>
        <header> Visual Systems v1 { this.graph() } </header>
        <div className="main">
          <div className="child-content">
            <SplitterLayout percentage secondaryInitialSize={this.graph()}> 
              <div>
                <h2>Navigation</h2>
              </div>
              <SplitterLayout percentage vertical secondaryInitialSize={100 - this.graph()}>
                <div className="App">
                  <h2>
                    Graph &nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={this.maximise}>maximise</button>
                    <button onClick={this.ide}>ide</button>
                  </h2>
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                      Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                      Learn React
                    </a>
                  </header>
                </div>
                <div>
                  <h2>Properties</h2>
                </div>
              </SplitterLayout>
            </SplitterLayout>
          </div>
        </div>
        <footer> Visual Systems v1 </footer>
      </div>
    );
  }
}

export default App;
