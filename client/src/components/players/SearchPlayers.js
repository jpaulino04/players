import React, { Component } from 'react'
import axios from "axios";

export default class SearchPlayers extends Component {
  render() {
    return (
      <div className="row ">
        <div className="col-12">
            <h1 className="text-center">
                Search Players
            </h1>            
        </div>

        <div className="col-8 mx-auto my-5">
            <form className="form-inline my-2 my-lg-0 d-block text-center">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <select class="form-control form-control-md">
                    <option>Search by Player name</option>
                    <option>Search by team</option>
                </select>
                <button class="btn btn-outline-success my-2 my-sm-0 mx-2 px-4" type="submit">Search</button>
            </form>
        </div>        
      </div>
    )
  }
}
