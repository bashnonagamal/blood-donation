import React, { useState } from 'react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom'
import './App.css';


function Navbar() {


    return (
        <nav class="navbar navbar-expand-lg py-1 navbar-light bg-light shadow-sm">
            <div class="container">
                <Link to="/" class="navbar-brand">
                    <img src={logo} width="55" alt="" class="d-inline-block align-middle mr-2" />
                </Link>

                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

                <div id="navbarSupportedContent" class="collapse navbar-collapse" data-toggle="collapse" data-target=".navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active"><Link to="/" class="nav-link">Home</Link></li>
                        <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
                        <li class="nav-item"><Link to="/hospitals" class="nav-link">Hospitals</Link></li>
                        <li class="nav-item"><a href="#login" class="nav-link">Sign In</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
