import React from 'react';

export default function InfoActor(props) {
    return (
        <div className="info-actor">
            <div>
            {   
              props.actor.profile_path == null? <img alt="No movie-img found" src={'logo192.png'} className="info-img" /> : <img alt="movie-img found" src={`https://image.tmdb.org/t/p/w185${props.actor.profile_path}`} className="info-img" />
            }
            </div>
            <div className="desc">
                <h3>{props.actor.name}</h3>
                <p>{props.actor.biography}</p>
                <p>Born in {props.actor.place_of_birth}</p>
            </div>
        </div>
    )
}
