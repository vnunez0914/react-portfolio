import React from 'react';
import './App.css';
// BrowserRouter is the parent component that holds all of <Route> components Router is the alias for BrowserRouter
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './contents/Home'
import About from './contents/About'


function App() {
  return (
    <Router>
      <div className="App">

        <NavBar/>
        {/* Route for Home.js contents */}
        <Route exact path="/">

          <Home />

        </Route>

        {/* Route for About.js contents */}
        <Route path="/about">

          <About />

        </Route>

      
      </div>
    </Router>
  );
}

export default App;