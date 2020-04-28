import React from 'react';
import './actor.css';
import { Link } from 'react-router-dom';

export default function Actor(props) {
    return (
        <div className="actor-row">
            <div className="actor-card">
            {   
              props.image == null? <img variant="top" src={'logo192.png'} className="actor-img" /> 
              : <img variant="top" src={`https://image.tmdb.org/t/p/w185${props.image}`} className="actor-img" />
            }
            </div>
            <div className="desc">
                <h1>{props.name}</h1>
                <p>{props.role}</p>
                <Link to={`/actors/${props.id}`}><button className="button" >more Info</button></Link>
            </div>
        </div>
    )
}
