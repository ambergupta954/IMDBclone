import React from 'react';
import '../App.css';

export default function Searchbar(props) {
    
    
    
    return (
        <div>
            <form className="form" onSubmit={props.handleSubmit}>
              <input className="search" type="text" value={props.searchText} onChange={props.handleChange}/>
              <button className="button" type="submit">search</button>
            </form>
        </div>
    )
   
}
