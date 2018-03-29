import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Switch, Route } from 'react-router-dom';


import { Navbar, NavItem, Icon } from 'react-materialize';

class Head extends React.Component {
  render() {
    return (
      <div>
        {/* <h1 className="App-title">(The) Jesse Rubin Dot Com</h1> */}
        <header className="App-title">(The) Jesse Rubin Dot Com</header>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          copyright © 2017 - 2018 jesse rubin?
           </footer>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (

      <div className="App">
        <Head />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <img src={require('./images/sconce1.jpeg')} width='1000px' />
        <Navbar brand='logo' right>
          <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
          <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
