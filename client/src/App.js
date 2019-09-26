import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Register from './Pages/Register';
import Shop from './Pages/Shop';

function App(props) {
  useEffect(() => {
    console.log(props)
  }, [])
  return (
    <Router>
      <div>
        <Header />
        {/* <Home /> */}
        {/* <Register /> */}
        {/* <Shop /> */}
        {/* <Footer /> */}
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
