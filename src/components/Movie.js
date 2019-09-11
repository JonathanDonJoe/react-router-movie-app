import React from 'react';

const imagePath=`http://image.tmdb.org/t/p/w300`;

function Movie(props) {
    console.log(props)
    return (
        <div className='col s6'>
            <img src={`${imagePath}${props.movie.poster_path}`} alt={props.keys}></img>
            <div className='movie-text'>
                <h5 className='movie-title'>
                    {props.movie.title}
                </h5>
            </div>
        </div>
    )
}


export default Movie