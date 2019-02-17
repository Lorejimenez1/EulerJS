import React from 'react';
import { Link} from 'react-router-dom';



export default function NavigationBar(props) {
    return (
        <div className="">
            <nav className="navbar">
                <a className="nav-header">PetLovers</a>
                <ul className="main-nav">
                    <li>
                        <a href="/" className="nav-links">Home</a>
                        
                    </li>
                    <li>
                         <a href="/event-finder" className="nav-links">Problems</a>
                    </li>     
                </ul>
            </nav>
        </div>
    );
}