import React from 'react';
import './movies.css';
import { Link } from 'react-router-dom';

export default function Movie(props) {
    return (
        <div className="movie-row">
            <div className="movie-card">
            {   
              props.image == null? <img variant="top" src={'logo192.png'} className="movie-img" /> 
              : <img variant="top" src={`https://image.tmdb.org/t/p/w185${props.image}`} className="movie-img" />
            }
            </div>
            <div className="desc">
                <h1>{props.title}</h1>
                <p>{props.overview}</p>
                <h4>Rating: {props.rating}</h4>
                <Link to={`/movies/${props.id}`}><button className="button" >more Info</button></Link>
            </div>
        </div>
    )
}
