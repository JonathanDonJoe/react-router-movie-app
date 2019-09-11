import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import SingleMovie from './SingleMovie'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <div className='row'>
            <Route exact path='/' component={Home} />
            <Route path='/movie/:movieId' component={SingleMovie} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
