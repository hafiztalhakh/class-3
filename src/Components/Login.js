import React from 'react';

class Login extends React.Component {

  state = ({
    name: "admin",
    password:'admin123',
    inputName: null,
    InputPass: null,
  })

  handelInput = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    })
   // console.log(ev.target.value);
  }

  verifyLogin = () =>{
    //Destructing
    const {name,password,inputName,InputPass} = this.state;
    const { loginTrue } = this.props;

    if(inputName === name){
      if(InputPass === password){
        console.log("login sucessfull");
        loginTrue();
      }else{
        console.log("invalid password");
      }
    }else{
      console.log("invalid name");
    }
  }

  render(){
    return (
      <React.Fragment>

        User Name: 
        <input
        type='text'
        name='inputName'
        value={this.state.inputName}
        onChange={this.handelInput}
        />

        <br/>

        Password: 
        <input
        type='password'
        name='InputPass'
        value={this.state.InputPass}
        onChange={this.handelInput}
        />

         <br/> 

        <button onClick={this.verifyLogin}>Login</button>
       
      </React.Fragment>
    );
  }
}

export default Login;
