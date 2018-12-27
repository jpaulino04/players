import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <h1 className="text-center">Hello</h1>
          <Footer />
        </React.Fragment>
      </Router>      
    );
  }
}

export default App;
