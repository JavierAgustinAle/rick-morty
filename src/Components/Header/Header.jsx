import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/" activeClassName="activo"> Characters </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/locations" activeClassName="activo"> Locations </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/episodes" activeClassName="activo"> Episodes </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;