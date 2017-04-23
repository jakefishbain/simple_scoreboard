import React, { Component } from 'react'
import ScoreForm from './ScoreForm'
var uuid = require('node-uuid');
var nf = new Intl.NumberFormat();

class Scoreboard extends Component {
  addScore(newScore){
    if(!isNaN(+newScore)){
      this.props.onGetAddScore(this.props.id, newScore)
    }else{
      alert(newScore + ' is not a number')
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
        <input placeholder='Name' className='player' id={this.props.id + 'player'}/>
        <h2>{nf.format(this.props.score)}</h2>
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
              className='oldScores'>{nf.format(oldScore)}
            </li>
          ))}
        </ul>
        <button
          className={'undo' + this.props.previousScores.length}
          onClick={() => this.props.onUndo(this.props.id)}>Undo
        </button>
        <button
          className='resetBtn'
          onClick={() => this.props.onReset(this.props.id)}>Reset
        </button>
      </div>
    )
  }
}

export default Scoreboard;
