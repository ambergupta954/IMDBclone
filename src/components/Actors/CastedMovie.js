import React from 'react';
import Movie from './Movie';

export default function CastedMovie(props) {
    return (
        <div>
            <div>
            {
                        props.castedMovie.map((movie) => {
                            return (
                                movie.poster_path != null && <Movie key={movie.id} id={movie.id} movie={movie} />
                            )
                        })
                    }
            </div>
        </div>
    )
}
