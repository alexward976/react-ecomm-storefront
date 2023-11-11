import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../logo.png';
import cartIcon from '../cart-icon.png';
import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <img alt="logo" style={{"width": 25 + '%', "borderRadius": 10 + 'px'}} src={logo} />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto w-100 mr-5 d-flex justify-content-end">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/productList">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">
                                <img alt="cart icon" src={cartIcon} style={{"width": 40 + '%'}} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}