import React, { Component } from 'react';
import Movie from './Movie'
// import Search from './Search'

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    componentDidMount() {

    }

    // componentDidUpdate(prevProps) {
    //     console.log(this.props);
    //     console.log(prevProps);
    //     console.log(prevProps.searchTerm === this.props.searchTerm);
    //     if(!(this.props.searchTerm === prevProps.searchTerm))
    //     {
    //         console.log('running')
    //       this.render();
    //     }
    //   } 


    render() { 
        console.log('rendering')
        console.log(this.props.movieResults)
        const movies = this.props.movieResults.map( (movie, i) => 
            <Movie key={i} keys={i} movie={movie} />
            )
        
        // const filteredMovies = this.props.movieResults.filter( movie => 
        //     movie.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
        //     );
        // const movies = filteredMovies.map( (movie, i) => 
        //     <Movie key={i} keys={i} movie={movie} />
        //     )
        
        return (
            <div>
                {/* <Search changeFromParent={this.changeSearch}/> */}
                <div className='col s12'>
                    <h1>Searching for: {this.props.searchTerm}</h1>
                    {movies}
                </div>
            </div>
        );
    }
}
 
export default SearchPage;