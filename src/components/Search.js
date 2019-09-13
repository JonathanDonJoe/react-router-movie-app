import React, { Component } from 'react';

class Search extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         searching: ''
    //     }
    // }


    
    render() { 

        return ( 
            <div>
                <form onSubmit={this.props.searchFromParent}>
                    <input type='text' onChange={this.props.changeFromParent} placeholder='Search' className='search-input'/>
                </form>
            </div>
        );
    }
}
 
export default Search;