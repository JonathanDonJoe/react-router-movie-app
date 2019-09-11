import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Router>
            <Route exact path='/' component={Home} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
