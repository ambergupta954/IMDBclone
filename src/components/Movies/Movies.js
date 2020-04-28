import React,{useState} from 'react';
import Searchbar from '../Searchbar';
import MovieRows from './MovieRows'
import axios from 'axios';
export default function Movies(props) {
   
    const apiKey="f5c033a946fbf7512ead51f565dd6362";
    const [searchText,setText] = useState("");
    const [movies,setMovies]=useState([]);
    const [apiError,setError]=useState(0);

    

    return (
        <div>
            {apiError === 0 ?<div className="movie-row"><h3>Search For Your Favourite Movie</h3></div>:<div className="movie-row"><h3>Search for something valid</h3></div>}
            
            <Searchbar handleChange={handleChange} handleSubmit={handleSubmit}/>
            {
                <MovieRows movies={movies}/>
            }
        </div>
    )

    function handleSubmit(e){
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`)
        .then(response => response.data)
        .then(data => {
            console.log(data.results);
            setMovies(data.results);
            setError(0);
        }).catch(error =>{
            console.log(error);
            setError(1);
        })
        
    }
    function handleChange(e){
        setText(e.target.value);
    }
}
