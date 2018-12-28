import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Players from "./components/Players";
import Provider from "./context";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
          <Router>
            <React.Fragment>
              <Header />
              <h1 className="text-center">Hello</h1>
              <div className="container">
                <Players />
              </div> 
              <Footer />
            </React.Fragment>
        </Router> 
      </Provider>           
    );
  }
}

export default App;
