import React from 'react';
import Movie from './Movie';

export default function MovieRows(props) {
    return (
        <div>
            
            {
                props.movies.map((movie)=>{
                    return(
                        <Movie key={movie.id} id={movie.id} image={movie.poster_path} title={movie.title} overview={movie.overview} rating={movie.vote_average} dateReleased={movie.release_date}/>
                    )
                }
                )
            }
        </div>
    )
}
