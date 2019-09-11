// make navbar a class
// put it on every page in router
// add search text box
// add an onchange to textbox
// update state everytime a character is typed

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return(
            <div className='container nav-bar'>
                <h3>Nav Bar</h3>
                <Link to='/'> Home</Link>
            </div>
        )
    }
}

export default NavBar;