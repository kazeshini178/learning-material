import React, { Component } from 'react';
import 'whatwg-fetch';
import logo from './logo.svg';
import TimeForm from './TimeForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: null,
      msg: 'now'
    };
  }

  fetchCurrentTime() {
    fetch(this.getApiUrl())
      .then(resp => resp.json())
      .then(resp => {
        const currentTime = resp.dateString;
        this.setState({ currentTime });
      });
  }

  getApiUrl() {
    const { tz, msg } = this.state;
    const host = 'http://fullstacktime.herokuapp.com';
    return `${host}/${tz}/${msg}.json`;
  }

  handleFormSubmit(evt) {
    this.fetchCurrentTime();
  }

  handleChange(newState) {
    this.setState(newState);
  }

  render() {
    const { currentTime, tz } = this.state;
    const apiUrl = this.getApiUrl();

    return (
      <div>
        {!currentTime &&
          <button onClick={this.fetchCurrentTime.bind(this)}>
            Get the current time
          </button>
        }
        {currentTime && <div>The current time is: {currentTime}</div>}
        <TimeForm
          onFormSubmit={this.handleFormSubmit.bind(this)}
          onFormChange={this.handleChange.bind(this)}
          tz={tz}
          msg={'now'}
        />
        <p>We'll be making a request from: <code>{apiUrl}</code></p>
      </div>
    );
  }
}

export default App;
