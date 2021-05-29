import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


function Register() {

    return (
        <div className="card2 card border-0 px-4 py-5">
            <div className="row mb-4 px-3">
                <h6 className="mb-0 mr-4 mt-2">Register</h6>
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
                <div className="line"></div>
                <small className="or text-center">Or</small>
                <div className="line"></div>
            </div>
            <div className="row px-3">
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Full Name</h6>
                </label>
                <input className="mb-4" type="text" name="email" placeholder="Full Name" />
            </div>
            <div className="row px-3">
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                </label>
                <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
            </div>
            <div className="row px-3">
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Blood Type</h6>
                </label>
                <select className="form-control mb-4">
                    <option selected>Select Blood Type</option>
                    <option value="1">O+</option>
                    <option value="2">O-</option>
                    <option value="3">A+</option>
                    <option value="4">A-</option>
                    <option value="5">B+</option>
                    <option value="6">B-</option>
                    <option value="7">AB+</option>
                    <option value="8">AB-</option>
                </select>
            </div>
            <div className="row px-3">
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Gender</h6>
                </label>
                <select className="form-control mb-4">
                    <option selected>Select Gender</option>
                    <option value="1">male</option>
                    <option value="2">Female</option>
                </select>
            </div>
            <div className="row px-3">
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Are you</h6>
                </label>
                <select className="form-control mb-4">
                    <option value="1">Doner</option>
                    <option value="2">Hospital</option>
                </select>
            </div>
            <div className="row px-3">
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                </label>
                <input type="password" className="mb-4" name="password" placeholder="Enter password" />
            </div>
            <div className="row px-3">
                <label className="mb-1">
                    <h6 className="mb-0 text-sm">Confirm Password</h6>
                </label>
                <input type="password" name="password" placeholder="Confirm Password" />
            </div>
            <div className="row px-3 mb-4"></div>
            <div className="row mb-3 px-3"> <button type="submit" className="btn btn-red text-center">Register</button> </div>
            <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <Link className="text-danger" to="/">Login</Link></small> </div>
        </div>
    );
}

export default Register;
