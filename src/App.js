import React, { Component } from "react";
import axios from 'axios';
import Buttons from './Components/buttons/Buttons'
import './App.css';

class App extends Component {
    constructor() {
      super();
      
      this.state = {
        players: [],
      }
    }

    componentDidMount(){
      axios.get('/api/players')
      .then(({ data }) => this.setState({ players: data }))
      .catch((err) => console.log(err))
    }

  
  render (){
  return (
      <div className="App">
    <div>
      <header className="App-header">
      {this.state.players.map((player) => {
        return (
          <div className="player-list">{player.name}<Buttons /> </div>
        )
        })}
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        </header>
      </div>
    </div>
  )}
  }

export default App;
