import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Home/>
          <About/>
      </div>
    );
  }
}

export default App;
