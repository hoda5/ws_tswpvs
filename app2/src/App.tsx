import * as React from 'react';
import {soma} from "./lib/soma";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          app2 - 2 + 2 = {soma(2, 2)}
        </p>
      </div>
    );
  }
}

export default App;
