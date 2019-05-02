import React from 'react';
import Admin from './Components/Admin';
import Login from './Components/Login';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      showLogin: true,
      showAdmin: false,
    })
  }


  // state = ({
  //   showLogin: true,
  //   showAdmin: false,
  // })

  loginTrue = () => {
    this.setState({
      showLogin: false,
      showAdmin: true,
    })
    console.log("working");
  }

  render() {
    const { showLogin, showAdmin } = this.state;
    return (
      <React.Fragment>

        {showAdmin && <Admin />}
        {showLogin && <Login loginTrue={this.loginTrue} />}

      </React.Fragment>
    );
  }
}

export default App;
