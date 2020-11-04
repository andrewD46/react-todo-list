import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="navbar-brand">
            Note App
        </div>

        <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>New note +</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/notes">All notes</NavLink>
            </li>
        </ul>
    </nav>
)