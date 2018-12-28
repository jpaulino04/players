import React, { Component } from 'react'
import {Consumer} from "../../context";

class AddPlayers extends Component {
   state = {
        players : null

   };

   newObj = null


    componentDidMount(){

    }

    render() {
        return(
            <Consumer>
                {
                    value => {  
                        this.newObj = value;                  
                        return (
                            <div className="row mb-5">
                                <div className="col-12">
                                    <h1 className="text-center">Add Top Players</h1>
                                </div>                
                                <form className="bg-dark  p-4 col-8 mx-auto form-inline justify-content-center">
                
                                    <div className="form-group mb-2 text-center d-block w-100 text-center">
                                        <input 
                                                type="text" 
                                                name="profile" 
                                                className="form-control m-1 d-block w-75 mx-auto" 
                                                placeholder="                                  Profile link (picture)"/>
                                    </div>  
                                    <div className="form-group mb-2 text-center">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            className="form-control m-1" 
                                            placeholder="First Name"/>
                                        <input 
                                            type="text" 
                                            name="lastname" 
                                            className="form-control m-1" 
                                            placeholder="Last Name"/>
                                        <input 
                                            type="text" 
                                            name="email" 
                                            className="form-control" 
                                            placeholder="Email"/>
                                    </div>
                                    <div className="form-group mb-2 text-center">
                                        <input 
                                            type="Number" 
                                            name="age" 
                                            className="form-control m-1" 
                                            placeholder="Age"/>
                                        <input 
                                            type="Number" 
                                            name="rbis" 
                                            className="form-control m-1" 
                                            placeholder="RBIs"/>
                                        <input 
                                            type="Number" 
                                            name="hruns" 
                                            className="form-control" 
                                            placeholder="HRuns"/>
                                    </div>
                                    <button type="submit" className="btn btn-block bg-info mb-2">Add Player</button>
                                </form>
                            </div>
                        )
                    }
                }
            </Consumer>   
        )     
    }
}

export default AddPlayers;