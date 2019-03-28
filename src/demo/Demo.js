import React, { Component } from 'react'
import { DashBoard, Greeting } from '../lib';

export default class Demo extends Component {


  loginClick = () => {
    console.log('Demo Click');
  }

  render() {
    const greeting = 'Welcome to React';
    return (
      <div>
        <DashBoard loginClick={this.loginClick} />
        <Greeting greeting={greeting} login={this.loginClick}/>
      </div>
    )
  }
}
