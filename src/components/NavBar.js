import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            movieList: {}
        }
    }

    changeSearch = e => {
        this.setState({
            searchTerm:e.target.value
        })
        this.props.changeFromParent(e)
    }
    
    searchItem = e => {
        e.preventDefault()
        const searchUrl = `/search/${this.state.searchTerm}`
        this.props.searchFromApp()
        this.props.history.push(searchUrl);
    }

    render() {
        return(
            <div className='container nav-bar nav-wrapper'>
                <Link to='/'> Home</Link>
                <Search searchFromParent={this.searchItem} changeFromParent={this.changeSearch} />
            </div>
        )
    }
}

export default NavBar;