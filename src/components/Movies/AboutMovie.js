import React,{useState, useEffect} from 'react';
import axios from 'axios';
import InfoMovie from './InfoMovie';
import InfoCast from './InfoCast';


export default function AboutMovie(props) {
    
    
    const [movie,setMovie] = useState({});
    const [cast,setCast] = useState([]);
    const [id,setID] =useState(props.match.params.id)
    
    useEffect(()=>{
         
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f5c033a946fbf7512ead51f565dd6362`)
        .then(response => response.data)
        .then(data => {
           console.log(data);
            setMovie(data)
        })

        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f5c033a946fbf7512ead51f565dd6362`)
        .then(response => response.data)
        .then(data => {
            console.log(data.cast)
            setCast(data.cast)
        })
    },[])
    return (
        <div>
            
            {
                <InfoMovie movie={movie}/>
            }
            <br></br>
            <div className="movie-row">
                <h2>Cast</h2>
            </div>
            {
                <InfoCast cast={cast}/>
            }
            }
        </div>
    )

    
}
