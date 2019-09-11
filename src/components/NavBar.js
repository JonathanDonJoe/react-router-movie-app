// make navbar a class
// put it on every page in router
// add search text box
// add an onchange to textbox
// update state everytime a character is typed

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: ''
        }
    }

    changeSearch = e => {
        e.preventDefault()
        const newVal = e.target.value
        // console.log(newVal);
        this.setState({
            searchTerm:newVal
        })

    }
    
    SearchItem = e => {
        e.preventDefault()
        const searchUrl = `/search/${this.state.searchTerm}`
        this.props.history.push(searchUrl);
    }

    render() {
        // console.log(this.state.searchTerm)
        return(
            <div className='container nav-bar'>
                <h3>Nav Bar</h3>
                <Link to='/'> Home</Link>
                <Search searchFromParent={this.SearchItem} changeFromParent={this.changeSearch} />
            </div>
        )
    }
}

export default NavBar;