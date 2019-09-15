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
        console.log(this.state.movieData)

        let genreList = [];
        this.state.movieData.genres.forEach(genre => genreList.push(genre.name));

        let tagline = ''
        if (this.state.movieData.tagline) {
            tagline = `"${this.state.movieData.tagline}"`;
        }

        
        return (
            <div className='container single-movie-container'>
                <h1>{this.state.movieData.title}</h1>
                <h5>{tagline}</h5>
                <img src={`${imagePath}${this.state.movieData.poster_path}`} alt={this.state.movieData.id}></img>
                <br/>
                <img className='production-company-logo' src={`${imagePath}${this.state.movieData.production_companies[0].logo_path}`} alt={this.state.movieData.id}></img>
                <p>
                    <strong>Runtime: </strong>{this.state.movieData.runtime} Minutes 
                    <br/>
                    <strong>Genre: </strong>{genreList.join(', ')} 
                    <br/>
                    <strong>Release Date: </strong>{this.state.movieData.release_date}
                    <br/>
                    <strong>Overview: </strong>{this.state.movieData.overview}
                </p>
                <br/>
            </div>
        )
    }
}

export default SingleMovie;