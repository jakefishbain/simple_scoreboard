import React, { Component } from 'react'
import ScoreForm from './ScoreForm'

class Scoreboard extends Component {
  addScore(newScore){
    this.props.onGetAddScore(this.props.id, newScore)
  }

  displayScore(newScore){

  }

  render(){
    return(
      <div className='container'>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className='deleteBtn'>X
        </button>
        <input className='player'/>
        <h2>{this.props.score}</h2>
        <ScoreForm
          key={this.props.id}
          id={this.props.id}
          onAddScore={this.addScore.bind(this)}
          onDisplayScore={this.displayScore.bind(this)}
        />
        <button
          onClick={() => this.props.onReset(this.props.id)}>Reset
        </button>
      </div>
    )
  }
}

export default Scoreboard;
