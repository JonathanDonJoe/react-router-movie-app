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
        console.log(this.props)
        console.log(this.state)

        this.props.searchFromApp()

        this.props.history.push(searchUrl);
    }

    render() {
        console.log(this.state.searchTerm)
        return(
            <div className='container nav-bar nav-wrapper'>
                {/* <h3>Nav Bar</h3> */}
                <Link to='/'> Home</Link>
                <Search searchFromParent={this.searchItem} changeFromParent={this.changeSearch} />
            </div>
        )
    }
}

export default NavBar;