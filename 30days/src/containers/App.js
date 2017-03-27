import React, { Component } from 'react';
import 'whatwg-fetch';
import '../App.css';

import { HashRouter, Route, } from 'react-router-dom';
import { Index } from './Index';


class App extends Component {
  render() {
    const createElement = (component, props) => {
      return <Component
        actions={this.props.actions}
        {...props} />
    }

    return (
      <HashRouter createElement={createElement}>
        <Route path="/" component={Index} >
        </Route>
      </HashRouter>
    );
  }
}

export default App;
