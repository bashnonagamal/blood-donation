import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Login() {

    return (

        <div className="card2 card border-0 px-4 py-5">
            <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                <div className="facebook text-center mr-3">
                    <div className="fa fa-facebook"></div>
                </div>
                <div className="twitter text-center mr-3">
                    <div className="fa fa-twitter"></div>
                </div>
                <div className="linkedin text-center mr-3">
                    <div className="fa fa-linkedin"></div>
                </div>
            </div>
            <div className="row px-3 mb-4">
                <div className="line"></div> <small className="or text-center">Or</small>
                <div className="line"></div>
            </div>
            <div className="row px-3"> <label className="mb-1">
                <h6 className="mb-0 text-sm">Email Address</h6>
            </label> <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" /> </div>
            <div className="row px-3"> <label className="mb-1">
                <h6 className="mb-0 text-sm">Password</h6>
            </label> <input type="password" name="password" placeholder="Enter password" /> </div>
            <div className="row px-3 mb-4">
                <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input" /> <label htmlFor="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
            </div>
            <div className="row mb-3 px-3"> <button type="submit" className="btn btn-red text-center">Login</button> </div>
            <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <Link className="text-danger" to="/register">Register</Link></small> </div>
        </div>

    );
}

export default Login;
