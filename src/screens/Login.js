import React, { Component, Fragment } from 'react'

class Login extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }

    state = ({
        username: 'hamza',
        password: 'hamza123',
        inputUsername: null,
        inputPassword: null,
    })

    //Input fields ko control banane ke liye.
    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    verifyLogin = () => {
        //Destructuring. Arrays and Object => USE.
        const { username, password, inputUsername, inputPassword } = this.state;
        const { loginTrue, test } = this.props;

        if (inputUsername === username) {
            if (inputPassword === password) {
                console.log(test);
                loginTrue();
            } else {
                console.log("INVALID PASSWORD");
            }
        } else {
            console.log("INVALID USERNAME");
        }
    }

    renderLogin = () => {
        return (
            <Fragment>
                <p>USERNAME</p>
                <input
                    type='text'
                    name='inputUsername'
                    value={this.state.inputUsername}
                    onChange={this.handleInput}
                />
                <p>PASSWORD</p>
                <input
                    type='password'
                    name='inputPassword'
                    value={this.state.inputPassword}
                    onChange={this.handleInput}
                />
                <br />
                <button onClick={this.verifyLogin}>LOGIN</button>
            </Fragment>
        )
    }

    render() {

        return (
            <Fragment>
                {this.renderLogin()}
            </Fragment>
        )
    }
}

export default Login;
