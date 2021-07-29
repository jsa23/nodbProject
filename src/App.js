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
      this.handlePoints=this.handlePoints.bind(this)
    }

    componentDidMount(){
      axios.get('/api/players')
      .then(({ data }) => this.setState({ players: data }))
      .catch((err) => console.log(err))
    }

    updatePlayers = (players) => {
      this.setState({ players })
    }

    handlePoints(changeInPoints, playerId){
      axios.put(`/api/players/${ playerId }/${ changeInPoints }`)
      .then((res) => this.setState({ players: res.data }))
      .catch((err) => console.log(err))
      }

    updatePosition = ( position ) => {
      this.setState({ position })
    }

    handleDelete = (id) => {
      axios.delete(`/api/players?deleteId=${id}`)
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
          <div className="player-list">{player.name}<br/>{player.position}
          <Buttons playerId={ player.id} playerPoints={player.points} 
          handlePoints={this.handlePoints} 
          handleDelete={this.handleDelete}/> </div>
        )
        })}
        {
          this.state.showAddPlayer ?
          <AddPlayerForm updatePlayers={this.updatePlayers}/> :
          <button onClick={() => this.setState({ showAddPlayer: true })}>Populate Form</button>
        }
        </header>
      </div>
    </div>
  )}
  }

export default App;
