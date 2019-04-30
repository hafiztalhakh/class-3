import React, { Component } from 'react';
// import * as firebase from 'firebase';

class Middle extends Component {

    renderData = () => {
        return(
            <p>MIDDLE DATA</p>
        )
    }

    renderMiddle = () => {
        return (
            <h1>MIDDLE</h1>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.renderMiddle()}
                {this.renderData()}
            </React.Fragment>
        )
    }
}

export default Middle;
