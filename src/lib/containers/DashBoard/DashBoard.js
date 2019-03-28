import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class Dashboard extends Component {

    handleLoginClick = () => {
        // this.props.loginClick();
        this.props.history.push('/ex2');

    }

    render() {
        return (
            <div>
                Dashboard from Lib1
        <hr></hr>
        <button className="btn btn-primary" onClick={this.handleLoginClick}>Login</button>

            </div>
        )
    }
}

export default withRouter(Dashboard);
