import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import './App.css';
var uuid = require('node-uuid');

const addScore = (id, score, boards) => {
  function attachScore(board){
    if(board.id === id){
      board.score += +score
    }
    return board
  }
  return boards.map(attachScore)
}

const addDisplayScore = (id, oldScore, boards) => {
  function attachDisplay(board){
    if(board.id === id){
      board.previousScore = board.previousScores.unshift(oldScore)
    }
    return board
  }
  return boards.map(attachDisplay)
}

const removeBoard = (id, boards) => {
  function removeIt(board) {
    return board.id !== id
  }
  return boards.filter(removeIt)
}

const resetBoard = (id, boards) => {
  function resetScore(board){
  const player = document.getElementById(`${board.id}player`)
  const score = document.getElementById(`${board.id}newScore`)
    if(board.id === id){
      player.value = ''
      score.value = ''
      board.score = 0
      board.previousScores = []
    }
    return board
  }
  return boards.map(resetScore)
}

const undoLast = (id, boards) => {
  function undo(board){
    if(board.id === id){
      board.score -= +board.previousScores[0]
      board.previousScores.shift()
    }
    return board
  }
  return boards.map(undo)
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = { boards: [] }
  }

  handleAddBoard(props){
    this.setState({boards: this.state.boards.concat({id: uuid.v4(), score: 0, previousScores: []})})
  }

  handleAddScore(id, score){
    this.setState({boards: addScore(id, score, this.state.boards)})
  }

  handleDisplayScore(id, oldScore){
    this.setState({boards: addDisplayScore(id, oldScore, this.state.boards)})
  }

  handleDeleteBoard(id){
    this.setState({boards: removeBoard(id, this.state.boards)})
  }

  handleResetBoard(id){
    this.setState({boards: resetBoard(id, this.state.boards)})
  }

  handleUndo(id){
    this.setState({boards: undoLast(id, this.state.boards)})
  }

  render() {
    return (
      <div className="App">

        <div className="AppHeader">
          <h2>Simple Scoreboard</h2>
        </div>
          <button className='addBoardBtn' onClick={this.handleAddBoard.bind(this)}>Add a Board</button>
          <ul>
            {
              this.state.boards.map( board =>(
                <Scoreboard
                  key={board.id}
                  score={board.score}
                  previousScores={board.previousScores}
                  id={board.id}
                  onGetAddScore={this.handleAddScore.bind(this)}
                  onGetDisplayScore={this.handleDisplayScore.bind(this)}
                  onDelete={this.handleDeleteBoard.bind(this)}
                  onReset={this.handleResetBoard.bind(this)}
                  onUndo={this.handleUndo.bind(this)}
                />
              ))
            }
          </ul>
      <div className='credits'>Icons made by <a href="http://www.flaticon.com/authors/vignesh-oviyan" title="Vignesh Oviyan">Vignesh Oviyan</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default App;
