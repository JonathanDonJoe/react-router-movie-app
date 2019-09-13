import React, { Component } from 'react';
import config from '../config'
import axios from 'axios'
import Movie from './Movie'
// import Search from './Search'

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            movieList: [],
            searching: ''
        }
    }

    componentDidMount() {
        const searchTerm = this.props.match.params.searchTerm;
        console.log(searchTerm)
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${config.api_key}&query=${searchTerm}`
        axios.get(searchUrl)
            .then( (resp) => {
                const movieResults = resp.data.results;
                console.log(movieResults);
                this.setState({
                    movieList: movieResults,
                    searching: searchTerm
                })
            })
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
        console.log(this.state.movieList)
        const movies = this.state.movieList.map( (movie, i) => 
            <Movie key={i} keys={i} movie={movie} />
            )
        
        // const filteredMovies = this.state.movieList.filter( movie => 
        //     movie.title.toLowerCase().includes(this.state.searching.toLowerCase())
        //     );
        // const movies = filteredMovies.map( (movie, i) => 
        //     <Movie key={i} keys={i} movie={movie} />
        //     )
        
        return (
            <div>
                {/* <Search changeFromParent={this.changeSearch}/> */}
                <div className='col s12'>
                    <h1>Searching for: {this.state.searching}</h1>
                    {movies}
                </div>
            </div>
        );
    }
}
 
export default SearchPage;