import React, { Component } from 'react'
import {Consumer} from "../../context";
import uuid from "uuid";

class AddPlayers extends Component {
    constructor(props){
        super(props)
        this.state = {            
            Age: "",
            Avatar: "",
            Batting_AVG: "",
            HRuns: "",
            Sex: "",
            Team: "",
            Last_Name: "",
            Name: "",
            NickName: "",
            RBIs: ""    
        };
    }    

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(dispatch, e){
    //Pass the event last

        e.preventDefault();
        var newPlayer = this.state;
        newPlayer.IdPlayer = uuid();
        console.log(newPlayer)
        dispatch({type:'Add_Contact', payload:newPlayer})
        //when making a post with axios, remember to send the data as the second param
        this.props.history.push('/')        
    }
    render() {
        return(
            <Consumer>
                {
                    value => {
                        //testing
                        // console.log("state from AddPlayer consumer: ",value)                            
                        const {dispatch} = value;
                        
                        return (
                            <div className="row mb-5">
                                <div className="col-12">
                                    <h1 className="text-center">Add Top Players</h1>
                                </div>                
                                <form 
                                    onSubmit={this.onSubmit.bind(this, dispatch)}
                                    className="bg-dark  p-4 col-8 mx-auto form-inline justify-content-center">
                
                                    <div className="form-group mb-2 text-center d-block w-100 text-center">
                                        <input 
                                                type="text" 
                                                name="Avatar" 
                                                className="form-control m-1 d-block w-75 mx-auto" 
                                                placeholder="                                  Profile link (picture)"
                                                value={this.state.Avatar}
                                                onChange={this.onChange.bind(this)}
                                        />
                                    </div>  
                                    <div className="form-group mb-2 text-center">
                                        <input 
                                            type="text" 
                                            name="Name" 
                                            className="form-control m-1" 
                                            placeholder="First Name"
                                            value={this.state.Name}
                                            onChange={this.onChange.bind(this)}
                                        />
                                        <input 
                                            type="text" 
                                            name="Last_Name" 
                                            className="form-control m-1" 
                                            placeholder="Last Name"
                                            value={this.state.Last_Name}
                                            onChange={this.onChange.bind(this)}
                                        />
                                        <input 
                                            type="text" 
                                            name="Team" 
                                            className="form-control ml-1" 
                                            placeholder="Team"
                                            value={this.state.Team}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                    <div className="form-group mb-2 text-center">
                                        <input 
                                            type="Number" 
                                            name="Age" 
                                            className="form-control m-1" 
                                            placeholder="Age"
                                            value={this.state.Age}
                                            onChange={this.onChange.bind(this)}
                                        />
                                        <input 
                                            type="Number" 
                                            name="RBIs" 
                                            className="form-control m-1" 
                                            placeholder="RBIs"
                                            value={this.state.RBIs}
                                            onChange={this.onChange.bind(this)}
                                        />
                                        <input 
                                            type="Number" 
                                            name="HRuns" 
                                            className="form-control ml-1" 
                                            placeholder="HRuns"
                                            value={this.state.HRuns}
                                            onChange={this.onChange.bind(this)}
                                        />                                
                                    </div>
                                    <div className="form-group mb-2 text-center">
                                        <input 
                                                type="text" 
                                                name="Batting_AVG" 
                                                className="form-control m-1" 
                                                placeholder="Batting AVG"
                                                value={this.state.Batting_AVG}
                                                onChange={this.onChange.bind(this)}
                                        />
                                        <input 
                                            type="text" 
                                            name="NickName" 
                                            className="form-control m-1" 
                                            placeholder="NickName"
                                            value={this.state.NickName}
                                            onChange={this.onChange.bind(this)}
                                        /> 
                                        <input 
                                            type="text" 
                                            name="Sex" 
                                            className="form-control ml-1" 
                                            placeholder="Sex"
                                            value={this.state.Sex}
                                            onChange={this.onChange.bind(this)}
                                        /> 
                                    </div>
                                    <button type="submit" name="Submit Button" className="btn btn-block bg-info mb-2">Add Player</button>
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