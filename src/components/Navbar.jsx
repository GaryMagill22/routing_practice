import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" style={{ justifyContent: 'space-between' }}>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Landing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;