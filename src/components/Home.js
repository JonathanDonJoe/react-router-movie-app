import React, { Component } from 'react';
import config from '../config'
import axios from 'axios'
import Movie from './Movie'
import Search from './Search'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            movieList: [],
            searching: ''
        }
    }

    componentDidMount() {
        const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`
        axios.get(nowPlayingUrl)
            .then( (resp) => {
                const movieResults = resp.data.results;
                console.log(movieResults);
                this.setState({
                    movieList: movieResults
                })
            })
    }

    changeSearch = e => {
        const newVal = e.target.value
        console.log(newVal);
        this.setState({
            searching:newVal
        })
    }


    render() { 

        // const movies = this.state.movieList.map( (movie, i) => 
        //     <Movie key={i} keys={i} movie={movie} />
        //     )
        
        const filteredMovies = this.state.movieList.filter( movie => 
            movie.title.toLowerCase().includes(this.state.searching.toLowerCase())
            );
        const movies = filteredMovies.map( (movie, i) => 
            <Movie key={i} keys={i} movie={movie} />
            )
        
        return (
            <div>
                <Search changeFromParent={this.changeSearch}/>
                <div className='col s12'>
                    {movies}
                </div>
            </div>
        );
    }
}
 
export default Home;