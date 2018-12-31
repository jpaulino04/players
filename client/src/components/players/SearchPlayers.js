import React, { Component } from 'react'
import axios from "axios";

export default class SearchPlayers extends Component {
    state = {
        players: [],
        showPlayers: false
    }
    onSubmit = (e)=> {
        e.preventDefault();
        axios.get('/players/search')
            .then(res =>{
                this.setState({players: res.data})
                this.setState({showPlayers: !this.state.showPlayers})                
            })
    }


    
  render() {
    return (
      <div className="row py-5">
        <div className="col-12 mt-4">
            <h1 className="text-center">
                Search Players
            </h1>            
        </div>

        <div className="col-8 mx-auto my-5 text-center">
            <form onSubmit={this.onSubmit} className="form-inline my-2 my-lg-0 d-block text-center">
                <input 
                    className="form-control mr-sm-2"
                    name="search"                     
                    type="text" 
                    placeholder="Search"
                />
                <select className="form-control form-control-md">
                    <option>Search All Players</option>
                    <option>Search By Player name</option>
                    <option>Search By team</option>
                </select>
                <button className="btn btn-outline-success my-2 my-sm-0 mx-2 px-4" type="submit">Search</button>
            </form>

            {this.state.showPlayers ? 
                <div className="text-center mt-3"> 
                    {this.state.players.map(player=>(
                        <p className="lead" key={player.IdPlayer}>{player.Name} {player.Last_Name}</p>
                    ))}                    
                </div> : (
                
                <div> <p className="muted text-center mt-4">Players Will Show Here</p></div>
            )}
        </div>        
      </div>
    )
  }
}
