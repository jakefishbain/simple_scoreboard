import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import './App.css';
var uuid = require('node-uuid');

const addScore = (id, score, boards) => {
  function attachScore(board){
    if(board.id === id){
      board.score = score
    }
    return board
  }
  return boards.map(attachScore)
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
                  onAddScore={this.handleAddScore.bind(this)}
                />
              ))
            }
          </ul>
      </div>
    );
  }
}

export default App;
