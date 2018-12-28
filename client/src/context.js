import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    console.log(state, action);
}

export default class Provider extends Component {
    constructor(props){
        super(props)

        this.state = {
            players : [
                {   
                    id: 1,
                    name : "Jose",
                    last : "Paulino",
                    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bpartridge/128.jpg",
                    age  : 32,
                    RBIs : 54,
                    HRuns : 22
                },
                {
                    id: 2,
                    name : "Marky",
                    last : "Rodriguez",
                    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/alek_djuric/128.jpg",
                    age  : 30,
                    RBIs : 56,
                    HRuns : 22
                },
                {
                    id: 3,
                    name : "Nefty",
                    last : "Ureña",
                    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/amayvs/128.jpg",
                    age  : 31,
                    RBIs : 54,
                    HRuns : 20
                }
                
            ]
        }

        this.dispatch = action => {
            this.setState((state) => reducer(state, action))
        }

    }


    render() {
        return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
