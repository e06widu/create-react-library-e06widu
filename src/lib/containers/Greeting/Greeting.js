import React, { Component } from 'react'

export default class Greeting extends Component {

    loginClick = () => {
        this.props.login();
    }

    render() {
        return (
            <div>
                <h1>{this.props.greeting}</h1>;
         <button className="btn btn-primary" onClick={this.loginClick}>Login</button>
            </div>
        )
    }
}
