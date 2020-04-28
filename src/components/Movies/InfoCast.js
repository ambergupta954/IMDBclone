import React from 'react';
import Person from './Person'

export default function InfoCast(props) {
    return (
        <div>
            <div>
            {
                    props.cast.map((person) => {
                        return (
                            person.profile_path != null && <Person key={person.id} id={person.id} person={person} />
                        )
                    })
                }
            </div>
        </div>
    )
}
