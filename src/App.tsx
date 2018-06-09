// libs
import * as React from 'react';
import './App.css';
// styles
import './styles/index.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-3">1</div>
            <div className="col-md-3">2</div>
            <div className="col-md-3">3</div>
            <div className="col-md-3">4</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
