import React, { Component } from 'react'
import ScoreForm from './ScoreForm'

class Scoreboard extends Component {
  addScore(newScore){
    console.log(newScore)
    this.props.onAddScore(this.props.id, newScore)
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
          onAddScore={this.addScore.bind(this)}
        />
      </div>
    )
  }
}

export default Scoreboard;
