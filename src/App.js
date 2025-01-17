import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import Home from './components/pages/home'

import GethubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css';

const App = () => {
  return (
    <GethubState>
    <AlertState> 
    <Router>
    <div className="App">
      <Navbar title="Github Finder" icon="fab fa-github" />
      <div className="container">
      <Alert />
      <Switch>
      <Route 
      exact
      path='/'
      component={Home}
      /> 
      <Route 
      exact
      path="/about"
      component={About}
      />
      <Route
      exact
      path='/user/:login'
      component={User}
      />
      </Switch>
      </div> 
    </div>
    </Router>
    </AlertState> 
    </GethubState>
  );
}

export default App;
