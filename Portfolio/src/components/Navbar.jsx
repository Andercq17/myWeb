import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'
import React, { useState } from 'react';
function Navbar(){
    
    const location = useLocation();
    const items = [
        { id: 1, name: 'Home', link:"/"},
        { id: 2, name: 'About', link:"/about" },
        { id: 3, name: 'Portfolio', link:"/portfolio" },
        { id: 4, name: 'Resume', link:"/curriculum" },
        { id: 5, name: 'Contact', link:"/contact" }
      ];
    return(
        <>
            <nav className='nv-nav nv-nav-chess-border'>
                <ul className='nv-nav-menu'>
                    {items.map( item => (
                        <li
                            key={item.id}
                            className={`nv-nav-menu-li nav-item ${location.pathname === item.link ? 'active' : ''}`}
                        >
                            <Link to={`${item.link}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;