import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Landing from './Landing';
import Dashboard from './Dashboard';
import About from './About';
import Hospitals from './Hospitals';
import HospitalProfile from './HospitalProfile';


function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/dashboard"> <Dashboard /> </Route>
        <Route exact path="/about"> <About /> </Route>
        <Route exact path="/hospitals"> <Hospitals /> </Route>
        <Route exact path="/hospitals/:id"> <HospitalProfile /> </Route>
        <Route path="/"> <Landing /> </Route>
      </Switch>
    </Router>

  );
}

export default App;
