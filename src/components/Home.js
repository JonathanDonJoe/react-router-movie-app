import React, { Component } from 'react';
import config from '../config'
import axios from 'axios'
import Movie from './Movie'

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
                this.setState({
                    movieList: movieResults
                })
            })
    }

    render() { 
        const movies = this.state.movieList.map( (movie, i) => 
            <Movie key={i} keys={i} movie={movie} />
        )

        return (
            <div>
                <div className='col s12'>
                    {movies}
                </div>
            </div>
        );
    }
}
 
export default Home;