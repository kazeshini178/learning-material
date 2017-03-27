import React, { Component } from 'react';
import 'whatwg-fetch';
import '../App.css';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Index } from './Index';
import { Home } from '../views/Home';

const About = () => (<div><h1>About</h1></div>);

class App extends Component {
  render() {
    const createElement = (component, props) => {
      return <Component
        actions={this.props.actions}
        {...props} />
    }

    return (
      <Router history={hashHistory} createElement={createElement}>
        <Route path="/" component={Index} >
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="about" component={About} />
        </Route>
      </Router>
    );
  }
}

export default App;
