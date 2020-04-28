import React from 'react';
import Actor from './Actor';

export default function ActorRows(props) {
    return (
        <div>
            
            {
                props.actors.map((actor)=>{
                    return(
                        <Actor key={actor.id} id={actor.id} image={actor.profile_path} name={actor.name}  role={actor.known_for_department}/>
                    )
                }
                )
            }
        </div>
    )
}
