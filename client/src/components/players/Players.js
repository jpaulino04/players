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
        }
    }
    componentDidMount(){
        axios.get('/players/search')
            .then((res) =>{
                this.setState({players: res.data})

            })
    }
    setPlayers = dispatch => {
        console.log(dispatch)
    }


  render() {
      return (
        <Consumer>
            {                
                value => {  
                    this.players = value.players;                    
                    const players = value.players;
                    const {dispatch} = value;
                    // this.setPlayers.bind(this,dispatch) //working here
                    //trying to use dispatch in setPlayes
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
