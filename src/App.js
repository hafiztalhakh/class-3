import React, {Component} from 'react';
// import * as firebase from 'firebase';

class App extends Component {

  printName = () => {
    console.log("Hamza");
  }

  renderHeader = () => {
    return(
      <h1>HEADER</h1>
    )
  }

  renderFooter = () => {
    return (
      <h1>FOOTER</h1>
    )
  }

  renderMiddle = () => {
    return(
      <h1>MIDDLE</h1>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.renderHeader()}
        {this.renderMiddle()}
        {this.renderFooter()}
        <button onClick={this.printName}>PRINT</button>
      </React.Fragment>
    )
  }
}

export default App;
