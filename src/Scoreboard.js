import React, { Component } from 'react'
import Interactive from './Interactable'
import ScoreForm from './ScoreForm'
// import interact from 'interactjs'
var uuid = require('node-uuid');
var nf = new Intl.NumberFormat();

const draggableOptions = {
	 onmove: event => {
		const target = event.target
	  // keep the dragged position in the data-x/data-y attributes
	  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
	  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

	  // translate the element
	  target.style.webkitTransform =
	  target.style.transform =
	    'translate(' + x + 'px, ' + y + 'px)'

	  // update the posiion attributes
	  target.setAttribute('data-x', x);
	  target.setAttribute('data-y', y);
	}
}

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
      <div>
      <Interactive draggable draggableOptions={draggableOptions}>
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
        </Interactive>
      </div>
    )
  }
}

export default Scoreboard;
