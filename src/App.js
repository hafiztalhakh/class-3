import React, { Component } from 'react';
// import * as firebase from 'firebase';

//Componenets
import Header from './screens/Header';
import Middle from './screens/Middle';
import Footer from './screens/Footer';
import Login from './screens/Login'

class App extends Component {

  state = ({
    showLogin: true,
    showMiddle: false,
  })

  loginTrue = () => {
    this.setState({
      showLogin: false,
      showMiddle: true,
    })
  }

  render() {
    const { showLogin, showMiddle } = this.state;

    return (
      <React.Fragment>
        <Header />
        {showMiddle && <Middle />}
        {showLogin && <Login loginTrue={this.loginTrue} test={"THIS IS A TEST STRING"} />}
        <Footer />
        <button onClick={this.printName}>PRINT</button>
      </React.Fragment>
    )
  }
}

export default App;
