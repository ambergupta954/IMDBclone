import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import InfoActor from './InfoActor';
import CastedMovie from './CastedMovie';

export default function AboutActor(props) {
  
    const [actor, setActor] = useState({});
    const [castedMovie, setCastedMovie] =useState([]);
    const id = props.match.params.id;
  
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=f5c033a946fbf7512ead51f565dd6362`)
        .then(response => response.data)
        .then(data => {
            setActor(data);
        })

        axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=f5c033a946fbf7512ead51f565dd6362`)
        .then(response => response.data)
        .then(data => {
            setCastedMovie(data.cast);
        })
    },[])
    return (
        <div>
            <div>
                {
                   <InfoActor actor={actor}/>
                }
                <br></br>
                <div className="movie-row">
                <h2>Casted Movies</h2>
                </div>
                {
                    <CastedMovie castedMovie={castedMovie}/>
                }
          
            </div>
        </div>
    )
}
