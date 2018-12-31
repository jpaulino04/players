import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    console.log(state, action);
}

export default class Provider extends Component {
    constructor(props){
        super(props)

        this.state = {
            players : []
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
