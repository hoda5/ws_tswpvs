import * as React from 'react';
// tslint:disable-next-line:no-debugger
// debugger;
import {soma} from "@hoda5/tswpvssoma"
// import {dobro} from "@hoda5/tswpvdobro"

// console.log( "1+2=", soma(1,2) )
// console.log( "dobre de 3=", dobro(3) )

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        passou
          1 + 2 = {soma(1, 2)}
        </p>
      </div>
    );
  }
}

export default App;
