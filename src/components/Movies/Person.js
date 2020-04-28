import React from 'react';
import {Link} from 'react-router-dom';

export default function Person(props) {
    return (
        <div>
            <div className="actor-row">
            <div className="actor-card">
            {   
              props.person.profile_path == null? <img variant="top" src={'logo192.png'} className="actor-img" /> 
              : <img variant="top" src={`https://image.tmdb.org/t/p/w185${props.person.profile_path}`} className="actor-img" />
            }
            </div>
            
            <div className="desc">
                <h1>{props.person.name}</h1>
                <p>{props.person.character}</p>
                <Link to={`/actors/${props.id}`}><button className="button" >more Info</button></Link>
            </div>
        </div>
        </div>
    )
}
