import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Landing from './Landing';


function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/"> <Landing/> </Route>
      </Switch>
    </Router>

  );
}

export default App;
