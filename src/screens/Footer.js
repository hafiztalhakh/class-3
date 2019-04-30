import React, { Component } from 'react';
// import * as firebase from 'firebase';

class Header extends Component {

    renderData = () => {
        return(
            <p>FOOTER DATA</p>
        )
    }

    renderFooter = () => {
        return (
            <h1>FOOTER</h1>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderFooter()}
                {this.renderData()}
            </React.Fragment>
        )
    }
}

export default Header;
