import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import vector from './assets/Blood-donation-vector.jpg';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';


function Landing() {

  return (
    <div className="container-fluid py-0 px-0">
      {/* H */}
      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
              <h1 class="font-weight-light">Donate Blood To Save Life</h1>
              <p class="lead">Start now by helping someone</p>
              <Link to="/dashboard" className="btn btn-red text-center rounded">Donate</Link>
            </div>
          </div>
        </div>
      </header>
      {/* H */}
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={vector} className="image" /> </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Router>
              <Switch>
                <Route path="/register"> <Register /> </Route>
                <Route path="/"> <Login /> </Route>
              </Switch>
            </Router>
          </div>
        </div>
        <div className="bg-red py-4" >
          <div className="row px-3">
            <small className="ml-4 ml-sm-5 mb-2 text-center w-100">Copyright &copy; 2021. All rights reserved.</small>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Landing;
