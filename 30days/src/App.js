import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

import { HashRouter, Route, } from 'react-router-dom';
import { Index } from './containers/Index';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={Index} >  
        </Route>
      </HashRouter>
    );
  }
}

export default App;
