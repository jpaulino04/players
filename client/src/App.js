import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Players from "./components/players/Players";
import AddPlayers from "./components/players/AddPlayers";
import SearchPlayers from "./components/players/SearchPlayers";
import Ricky from "./components/players/Ricky";
import Provider from "./context";
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider>
          <Router>
            <React.Fragment>
              <Header/>              
              <div className="container">

                <Switch>
                  <Route exact path="/" component={Players}/>
                  <Route exact path="/players/add" component={AddPlayers} />
                  <Route exact path="/players/search" component={SearchPlayers} />
                  <Route exact path="/players/ricky" component={Ricky} />
                </Switch>

              </div> 
              <Footer />
            </React.Fragment>
        </Router> 
      </Provider>           
    );
  }
}

export default App;
