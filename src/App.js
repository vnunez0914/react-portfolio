import React from 'react';
import './App.css';
// BrowserRouter is the parent component that holds all of <Route> components Router is the alias for BrowserRouter
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './contents/Home'


function App() {
  return (
    <Router>
      <div className="App">

        <NavBar/>
        <Route exact path="/">

          <Home />

        </Route>

      </div>
    </Router>
  );
}

export default App;