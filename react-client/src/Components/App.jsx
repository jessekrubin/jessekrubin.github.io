import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './head/NavBar';
class App extends Component {
  render() {
    return (
        <div>
          <p>
            hello
          </p>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
        </div>
    )
  }
}
export default App;