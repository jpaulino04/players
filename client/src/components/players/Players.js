import React, { Component } from 'react'
import {Consumer} from "../../context";
import axios from "axios";
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
    
    componentDidMount(){
        axios.get('/players/search')
            .then((res) =>{
                this.setState({players: res.data, dispatch: this.dispatch})
                this.setPlayers(this.dispatch)

            })
        
    }
    setPlayers = dispatch => {
        console.log(this.state)
    }

    
  render() {
      return (
        <Consumer>
            {                
                value => {  
                    this.players = value.players;                    
                    const players = value.players;
                    const {dispatch} = value;  
                    this.dispatch = dispatch;                  
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
