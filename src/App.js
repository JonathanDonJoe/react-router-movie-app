import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import SingleMovie from './components/SingleMovie'
import NavBar from './components/NavBar'
import SearchPage from './components/SearchPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm:''
    }
  }

  changeSearch = e => {
    this.setState({
        searchTerm:e.target.value
    }, () => {
      console.log(this.state)
    })
  }
 
//    searchItem = e => {
//     e.preventDefault()
//     const searchUrl = `/search/${this.state.searchTerm}`
//     console.log(this.props)
//     // this.props.history.push(searchUrl);
// }

  render() {
    return (
      <Router>
        <div className='container'>
          <div className='row'>
            <Route path='/' 
            render={(props) => <NavBar history={props.history} changeFromParent={this.changeSearch} searchFromParent={this.searchItem}/>} 
            // component={NavBar}
            />
            <Route exact path='/' component={Home} />
            <Route path='/movie/:movieId' component={SingleMovie} />
            <Route path='/search/:searchTerm' 
            // component={SearchPage} 
            render={(props) => <SearchPage match={props.match} 
            // searchTerm={this.state.searchTerm}
            />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
