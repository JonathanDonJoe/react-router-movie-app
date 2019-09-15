import React, { Component } from 'react';
import axios from 'axios';
import config from '../config'
import Spinner from './Spinner'

class SingleMovie extends Component {
    constructor() {
        super();
        this.state = {
            movieData:{}
        }
    }

    async componentDidMount() {
        const movieId = this.props.match.params.movieId;
        const thisMovieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.api_key}`

        const resp = await axios.get(thisMovieUrl)
        this.setState({
            movieData: resp.data
        })
        
    }

    render() {
        const imagePath=`http://image.tmdb.org/t/p/w300`;

        if (this.state.movieData.id === undefined) {
            return (<Spinner />)
        }

        return (
            <div className='container'>
                <h1>{this.state.movieData.title}</h1>
                <img src={`${imagePath}${this.state.movieData.poster_path}`} alt={this.state.movieData.id}></img>
                <br/>
                <img src={`${imagePath}${this.state.movieData.production_companies[0].logo_path}`} alt={this.state.movieData.id}></img>
            </div>
        )
    }
}

export default SingleMovie;