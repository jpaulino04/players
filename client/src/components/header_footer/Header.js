import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <a className="navbar-brand" href="/">J P A U L I N O</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <Link 
          className="nav-item nav-link ml-auto" to="/">Home <span className="sr-only">(current)</span></Link>   
        <Link 
          className="nav-item nav-link ml-auto" to="/players/add">Add Player<span className="sr-only">(current)</span>
        </Link>   
        <Link 
          className="nav-item nav-link ml-auto" to="/players/search">Search Players<span className="sr-only">(current)</span></Link>  
      </div>
  </div>
</nav>   
  );
}

export default Header;
