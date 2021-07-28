import React, { Component } from 'react';


class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player: { points: 0}
        }
    }

    handlePoints(changeInPoints){
        const { player } = this.state;
        if (changeInPoints === 'clear') {
            this.setState({ player: { ...player, points: 0 }}) 
        } else if (changeInPoints === 'three') {
            this.setState({ player: { ...player, points: player.points + 3}})
        } else if (changeInPoints === 'two') {
            this.setState({ player: { ...player, points: player.points + 2}})
        }
    }

    

    render() {
        return(
            <div>{this.state.player.points}
            <button onClick ={ () => this.handlePoints('clear')}> Reset Points </button> 
            <button onClick ={ () => this.handlePoints('three')}> 3-Points </button> 
            <button onClick ={ () => this.handlePoints('two')}> 2-Points </button> 
            <button> Clear Player </button>
            </div>
    )}
}

export default Button