import React, { Component } from 'react'

export default class Dashboard extends Component {

    handleLoginClick = () => {
        this.props.loginClick();
    }

    render() {
        return (
            <div>
                Dashboard from Lib
        
        <button className="btn btn-primary" onClick={this.handleLoginClick}>Login</button>

            </div>
        )
    }
}
