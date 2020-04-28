import React from 'react';

export default function InfoMovie(props) {
    return (
        <div className="info-movie">
            <div>
            {props.movie == null? <img alt="No movie-img found" src={'logo192.png'} className="info-img" /> : <img alt="movie-img found" src={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`} className="info-img" />}
            </div>
            <div class="desc">
                <h1>{props.movie.title}</h1>
                <h3>{props.movie.tagline}</h3>
                <p>{props.movie.overview}</p>
                <p>Status : {props.movie.status}</p>
                <p>Rating : {props.movie.vote_average}</p>
            </div>
        </div>
    )
}
