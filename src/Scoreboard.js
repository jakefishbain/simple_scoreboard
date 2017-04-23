import React, { Component } from 'react'
import ScoreForm from './ScoreForm'
// import interact from 'interactjs'
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
			<div className='scoreContainer container'>
          <button
            onClick={() => this.props.onDelete(this.props.id)}
            className='deleteBtn'>❌
          </button>
          <input placeholder='Name' className='player' id={this.props.id + 'player'}/>
          <h2>{nf.format(this.props.score)}</h2>
          <ScoreForm
            key={this.props.id}
            id={this.props.id}
            onAddScore={this.addScore.bind(this)}
            onDisplayScore={this.displayScore.bind(this)}
          />
          <ul className='oldList' key={this.props.id + 'oldScores'}>
            {this.props.previousScores.map((oldScore, i) => (
              <li
                key={uuid.v4()}
								onClick={() => this.props.onUndo(this.props.id, i)}
                className='oldScores'>{nf.format(oldScore)}
              </li>
            ))}
          </ul>
          <button
            className={'icon undo' + this.props.previousScores.length}
            onClick={() => this.props.onUndo(this.props.id, 0)}>🔙
          </button>
          <button
            className='icon resetBtn'
            onClick={() => this.props.onReset(this.props.id)}>🗑
          </button>
				</div>
    )
  }
}

export default Scoreboard;
