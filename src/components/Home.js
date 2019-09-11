import React, { Component } from 'react';
import config from '../config'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            movieList: {}
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


    render() { 
        return (
            <h1>Home Page</h1>
        );
    }
}
 
export default Home;