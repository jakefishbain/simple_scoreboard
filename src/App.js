import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import './App.css';
var uuid = require('node-uuid');

const addScore = (id, score, boards) => {
  function attachScore(board){
    if(board.id === id){
      board.score = +board.score + +score
    }
    return board
  }
  return boards.map(attachScore)
}

const removeBoard = (id, boards) => {
  function removeIt(board) {
    return board.id !== id
  }
  return boards.filter(removeIt)
}

const resetBoard = (id, boards) => {
  function resetScore(board){
    if(board.id === id){
      board.score = 0
    }
    return board
  }
  return boards.map(resetScore)
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      boards: [
        { id: 0, score: 0 },
      ]
    }
  }

  handleAddBoard(props){
    this.setState({boards: this.state.boards.concat({id: uuid.v4(), score: 0})})
  }

  handleAddScore(id, score){
    this.setState({boards: addScore(id, score, this.state.boards)})
  }

  handleDeleteBoard(id){
    this.setState({boards: removeBoard(id, this.state.boards)})
  }

  handleResetBoard(id){
    this.setState({boards: resetBoard(id, this.state.boards)})
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
                  id={board.id}
                  onGetAddScore={this.handleAddScore.bind(this)}
                  onDelete={this.handleDeleteBoard.bind(this)}
                  onReset={this.handleResetBoard.bind(this)}
                />
              ))
            }
          </ul>
      </div>
    );
  }
}

export default App;
