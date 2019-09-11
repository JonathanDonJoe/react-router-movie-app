import React from 'react';
import { Link } from 'react-router-dom';

const imagePath=`http://image.tmdb.org/t/p/w300`;

function Movie(props) {
    return (
        <div className='col s6 movie-poster-container'>
            <Link to={`/movie/${props.movie.id}`} >
                <img src={`${imagePath}${props.movie.poster_path}`} alt={props.keys}></img>
                <div className='movie-text'>
                    <h5 className='movie-title'>
                        {props.movie.title}
                    </h5>
                </div>
                </Link>
        </div>
    )
}


export default Movie