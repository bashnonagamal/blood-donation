import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import vector from './assets/Blood-donation-vector.jpg';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Footer from './Footer';
import BloodDonation from './assets/blood-donation.png' 
import FindDonor from './assets/find-donor.png' 
import Free from './assets/free.jpg'


function Landing() {

  return (
    <div className="container-fluid py-0 px-0">
      {/* Image Section */}
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
      {/* End of Image Section */}
      {/* Why Choos Us section */}
      <div class='container-fluid mx-auto mt-5 mb-5 col-12 text-center'>
        <h4 className="my-4">Why Choose Us</h4>
        <div class="row justify-content-center">
          <div class="card col-md-3 col-12">
            <div class="card-content">
              <div class="card-body"> <img class="img" src={BloodDonation} width="180"/>
                <div class="shadow"></div>
                <div class="card-title"> Blood Donation </div>
                <div class="card-subtitle">
                  <p> <small class="text-muted"> World first social media for blood donation </small></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-md-3 col-12 ml-2">
            <div class="card-content">
              <div class="card-body"> <img class="img" src={Free} width="120"/>
                <div class="card-title"> 100% Free </div>
                <div class="card-subtitle">
                  <p> <small class="text-muted"> We never make money from blood </small> </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-md-3 col-12 ml-2">
            <div class="card-content">
              <div class="card-body"> <img class="img rck" src={FindDonor} width="130"/>
                <div class="card-title"> Find Blood Donor </div>
                <div class="card-subtitle">
                  <p> <small class="text-muted"> Find donor wherever you are </small> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us section End */}
      {/* Login and Register Section */}
      <div className="card card0 border-0" id="login">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src={vector} width="560" height="480" /> </div>
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
        <Footer />
      </div>
    </div>

  );
}

export default Landing;
