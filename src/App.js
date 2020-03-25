import React from 'react';
import './App.css';
// BrowserRouter is the parent component that holds all of <Route> components Router is the alias for BrowserRouter
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from './Components/NavBar';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
      </div>
    </Router>
  );
}

export default App;