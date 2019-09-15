import React, { Component } from 'react';
import Movie from './Movie'

// import axios from 'axios';
// import config from '../config'

class SearchPage extends Component {

    render() { 

        const movies = this.props.movieResults.map( (movie, i) => 
            <Movie key={i} keys={i} movie={movie} />
            )
        
        return (
            <div>
                <div className='col s12'>
                    <h1>Searching for: {this.props.searchTerm}</h1>
                    {movies}
                </div>
            </div>
        );
    }
}
 
export default SearchPage;