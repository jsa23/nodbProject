// import e from 'express';
import React from 'react';
import axios from 'axios';

export default class AddPlayerForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            playerName: '',
            playerPosition: '',
        }
    }

    handleNameInput = (e) => this.setState({ playerName: e.target.value})

    submitNewPlayer = () => {
        const body = { name: this.state.playerName, position: this.state.playerPosition };

        axios.post('/api/players', body)
        .then(res => this.props.updatePlayers(res.data))
        .catch(err => console.log(err))
    }

    handlePositionInput = (e) => this.setState({ playerPosition: e.target.value})

    submitNewPosition = () => {
        const body = {  };
    
        axios.post('/api/players', body)
        .then(res => this.props.updatePlayers(res.data))
        .catch(err => console.log(err))
    }


    render (){
        return (
            <div>
                <input onChange={this.handleNameInput}/>
                <input onChange={this.handlePositionInput}/>
                <button onClick={this.submitNewPlayer}> Add Player! </button>
            </div>
        )}
    }

// input[index]

// 2:55 go to meeting