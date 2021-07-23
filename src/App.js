import React, { Component } from "react";
import Buttons from './Components/buttons/Buttons'
import './App.css';

class App extends Component {
    constructor() {
      super();

      this.state = {

      }
    }

    componentDidMount(){
      // axios.get('')
      // .then((res) => console.log(res))
      // .catch((err) => console.log(err))
    }

  
  render (){
  return (
    <div className="App">
      <header className="App-header">
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
       
      </header>
    </div>
  );
  }
  }

export default App;
