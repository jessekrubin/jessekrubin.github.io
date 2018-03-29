import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Switch, Route } from 'react-router-dom';


import {Navbar, NavItem} from 'react-materialize';

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>(The) Jesse Rubin Dot Com</h1>
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
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
