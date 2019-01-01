import React, { Component } from 'react'
import {Consumer} from "../../context";

import Player from "./Player";
class Players extends Component {
    constructor(props){
        super(props);
        this.state = {
            players: [], 
            dispatch: null
        };
        this.dispatch = null;
    }
  render() {
      return (
        <Consumer>
            {                
                value => { 
                    const {players} = value;
                    console.log(players[0])
                    return(
                        <React.Fragment>    
                            <h1 className="text-center">Top Baseball Players</h1>                         
                            <div className="row justify-content-around my-4  text-center py-4"> 
                                {
                                    players.map(player =>(
                                        <Player key={player.IdPlayer} player={player}/>
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
