import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <nav>
            <div className="icon">
            <h3>IMDB</h3>
            </div>
            
            <div className="nav-links">
                
                    <div className="links">
                        <Link to='/Movies'>
                        <h4>Movies</h4>
                        </Link>
                    </div>
                    <div className="links">
                        <Link to='/Actors'>
                        <h4>Actors</h4>
                        </Link>
                    </div>
               
                
                
            </div>
        </nav>
    )
}
