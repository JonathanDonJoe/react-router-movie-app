import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searching: ''
        }
    }

    // changeSearch = (e) => {
    //     console.log(e.target.value);
    //     this.setState({
    //         searching: e.target.value
    //     })
    // }

    render() { 
        console.log(this.state.searching);

        return ( 
            <input type='text' onChange={this.props.changeFromParent} value={this.props.searching} placeholder='Search' />
        );
    }
}
 
export default Search;