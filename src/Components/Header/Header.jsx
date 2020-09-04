import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom';

const Header = () => {

    const changeActive = (id) => {
        switch (id) {
            case 'r-m':
                document.getElementById('r-m').className = "nav-link active"
                document.getElementById('loc').className = "nav-link"
                document.getElementById('ep').className = "nav-link"
                break;
            case 'loc':
                document.getElementById('loc').className = "nav-link active"
                document.getElementById('r-m').className = "nav-link"
                document.getElementById('ep').className = "nav-link"
                break;
            case 'ep':
                document.getElementById('ep').className = "nav-link active"
                document.getElementById('loc').className = "nav-link"
                document.getElementById('r-m').className = "nav-link"
                break;
            default:
                document.getElementById('r-m').className = "nav-link active"
                document.getElementById('loc').className = "nav-link"
                document.getElementById('ep').className = "nav-link"
                break;
        }


    }
    return (

        <nav className="navbar sticky-top navbar-expand-lg navbar-expand-md navbar-dark bg-dark ">
            <div className="mx-auto" >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active" id="r-m">
                        <NavLink className="nav-link" exact to="/rick-morty" activeClassName="activo" onClick={() => changeActive('r-m')}> Characters </NavLink>
                    </li>
                    <li className="nav-item" id="loc">
                        <NavLink className="nav-link" exact to="/locations" activeClassName="activo" onClick={() => changeActive('loc')}> Locations </NavLink>
                    </li>
                    <li className="nav-item" id="ep">
                        <NavLink className="nav-link" exact to="/episodes" activeClassName="activo" onClick={() => changeActive('ep')}> Episodes </NavLink>
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default Header;