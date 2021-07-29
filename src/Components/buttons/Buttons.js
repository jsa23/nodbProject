import React, { Component } from 'react';


class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player: { points: 0}
        }
    }

    render() {
        return(
        <div className="button-row">{this.props.playerPoints}
                <button onClick ={ () => this.props.handlePoints(2, this.props.playerId)}> 2-Points </button> 
                <button onClick ={ () => this.props.handlePoints(3, this.props.playerId)}> 3-Points </button> 
                <button onClick ={ () => this.props.handlePoints(0, this.props.playerId)}> Reset Points </button> 
                <button onClick ={ () => this.props.handleDelete(this.props.playerId)}> Delete player</button>
            </div>
    )}
}

export default Button