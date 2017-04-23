import React, { Component } from 'react'
import ScoreForm from './ScoreForm'
var uuid = require('node-uuid');

class Scoreboard extends Component {
  addScore(newScore){
    if(!isNaN(+newScore)){
      this.props.onGetAddScore(this.props.id, newScore)
    }
  }

  displayScore(oldScore){
    if(!isNaN(+oldScore)){
      this.props.onGetDisplayScore(this.props.id, oldScore)
    }
  }

  render(){
    return(
      <div className='container'>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className='deleteBtn'>X
        </button>
        <input className='player' id={this.props.id + 'player'}/>
        <h2>{this.props.score}</h2>
        <ScoreForm
          key={this.props.id}
          id={this.props.id}
          onAddScore={this.addScore.bind(this)}
          onDisplayScore={this.displayScore.bind(this)}
        />
        <ul key={this.props.id + 'oldScores'}>
          {this.props.previousScores.map(oldScore => (
            <li
              key={uuid.v4()}
              className='oldScores'>{oldScore}
            </li>
          ))}
        </ul>
        <button
          onClick={() => this.props.onReset(this.props.id)}>Reset
        </button>
      </div>
    )
  }
}

export default Scoreboard;
