import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';


import { BrowserRouter as Router, Route, Link, history } from "react-router-dom";

import { Navbar, NavItem, Icon } from 'react-materialize';


class Sconce extends React.Component {
  render() {
    return (
      <div>
        <img src={require('./images/sconce1.jpeg')} width='1000px' />
      </div>
    );
  }
}

class Head extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <header className="App-title">(The) Jesse Rubin Dot Com</header>
        <Link to="/">Home</Link>
        <Route exact path="/" component={Home} />
        <hr />
      </div>
    </Router>
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
        <Home /> 
        <Footer /> 
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/topics">Topics</Link>
          </li> */}
        </ul>
  
  
        <Route path="/about" component={About} />
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
    );
  }
}



const About = () => (
  <div>
    <h2>About</h2>

			<iframe src="stuff/jrubin_resume_no_phone_12_03_17.pdf" width="800" height="800"></iframe>

  </div>
);

export default App;
