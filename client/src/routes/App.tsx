import * as React from 'react';
import './App.css';

import Login from './Login';

const logo = require('./react_logo.svg'); // tslint:disable-line no-var-requires

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <div className='App-intro'>
          <Login />
        </div>
      </div>
    );
  }
}

export default App;