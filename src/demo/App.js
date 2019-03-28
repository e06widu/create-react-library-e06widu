import React, { Component } from 'react';
import Example from '../lib';
import { SecondExample } from '../lib';
import Demo from './Demo'
import { Route, Switch, withRouter } from 'react-router-dom';


class App extends Component{


  render() {

    let routes = (
      <Switch>
        <Route exact key='/ex1' path='/ex1' component={Example}></Route>
        <Route exact key='/ex2' path='/ex2' component={SecondExample}></Route>
        <Route exact key='/demo' path='/demo' component={Demo}></Route>
        <Route exact key='/' path='**' component={Demo}></Route>
      </Switch>
    );

    return (
      <div>
          {routes}
      </div>
    );
  }

}


export default withRouter(App);
