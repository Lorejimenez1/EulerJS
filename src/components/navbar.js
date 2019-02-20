import React from 'react';
import './navbar.css';

export default function NavigationBar(props) {
    return (
      	<div className="nav-container">
            <nav className="navbar">
                <img src="https://pngimage.net/wp-content/uploads/2018/06/javascript-png-5.png" alt="" class="nav-logo"></img>
                <ul className="main-nav">
                    <li>
                        <a href="/" className="nav-links">ProjectEulerJS</a>
                    </li>
                    <li>
                         <a href="/event-finder" className="nav-links">Resources</a>
                    </li>     
                </ul>
            </nav>
        </div>
    );
}