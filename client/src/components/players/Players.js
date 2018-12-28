import React, { Component } from 'react'
import {Consumer} from "../../context";
import Player from "./Player";
class Players extends Component {
    constructor(props){
        super(props);
        this.players = []
    }
    componentDidMount(){
        console.log("List of players")
        console.log(this.players)
    }
  render() {
      return (
        <Consumer>
            {                
                value => {  
                    this.players = value.players;
                    
                    const players = value.players;
                    return(
                        <React.Fragment>    
                            <h1 className="text-center">Top Baseball Players</h1>                         
                            <div className="row justify-content-around my-4 bg-dark text-center p-2"> 
                                {
                                    players.map(player =>(
                                        <Player key={player.id} player={player}/>
                                    ))
                                }
                            </div>
                        </React.Fragment>    
                    )
                }
            }

        </Consumer>
      )
  }
}

export default Players;
