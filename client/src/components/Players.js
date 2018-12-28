import React, { Component } from 'react'
import {Consumer} from "../context";
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
                            <div className="row text-center my-4 bg-dark p-3">
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
