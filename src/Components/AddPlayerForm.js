// import e from 'express';
import React from 'react';
import axios from 'axios';

export default class AddPlayerForm extends React.Component{
    constructor(){
        super();

        this.state = {
            playerName: '',
            playerPosition: '',
        }
    }

    handleNameInput = (e) => this.setState({ playerName: e.target.value})

    submitNewPlayer = () => {
        const body = { name: this.state.playerName };

        axios.post('/api/players', body)
        .then(res => this.props.updatePLayers(res.data))
        .catch(err => console.log(err))
    }

    render (){
        return (
            <div>
                <input onChange={this.handleNameInput}/>
                <button onClick={this.submitNewPlayer}> Add Player! </button>
            </div>
        )}
    }

// input[index]