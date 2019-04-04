import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className="navDiv">
            <nav className="mainNav">
                <NavLink activeClassName="active blue" to="/">Main Page</NavLink>
                <NavLink activeClassName="active orange" to="/calculator">Projects</NavLink>
                <NavLink activeClassName="active green" to="/contact">Contact</NavLink>
                <NavLink activeClassName="">Placeholder</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;