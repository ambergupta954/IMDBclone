import React from 'react';
import {Link} from 'react-router-dom';

export default function Movie(props) {
    return (
        <div className="actor-row">

            <div class="actor-card">
           
            {   
                    <img className="cast-img" alt="movie-img found" src={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`} roundedCircle />
            }
            </div>
            <div className="desc">
            <h2>{props.movie.title}</h2> 
            <p>{props.movie.character}</p>
            <Link to={`/movies/${props.id}`}><button className="button" variant="info" size="sm">Know more</button></Link>
            </div>
        </div>
    )
}
