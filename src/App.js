import React, { Component } from "react";
import axios from 'axios';
import AddPlayerForm from './Components/AddPlayerForm';
import Buttons from './Components/buttons/Buttons';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        players: [],
        showAddPlayer: false,
      }
    }

    componentDidMount(){
      axios.get('/api/players')
      .then(({ data }) => this.setState({ players: data }))
      .catch((err) => console.log(err))
    }

    updatePlayers = (players) => {
      this.setState({ players })
    }

  
  render (){
  return (
    <div className="App">
      <div>
      <header className="App-header">
      {this.state.players.map((player) => {
        return (
          <div className="player-list">{player.name}<br/>{player.position}<Buttons /> </div>
        )
        })}
        {
          this.state.showAddPlayer ?
          <AddPlayerForm updateCars={this.updatePlayers}/> :
          <button onClick={() => this.setState({ showAddPlayer: true })}>Populate Form</button>
        }
        </header>
      </div>
    </div>
  )}
  }

export default App;
