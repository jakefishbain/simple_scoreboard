import React, { Component } from 'react';
import Scoreboard from './Scoreboard';
import './App.css';
var uuid = require('node-uuid');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      boards: [
        { id: 0, name: 'name' },
      ]
    }
  }

  handleAddBoard(props){
    this.setState({boards: this.state.boards.concat({id: uuid.v4(), name: 'name'})})
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
                <Scoreboard key={board.id} name={board.name}/>
              ))
            }
          </ul>
      </div>
    );
  }
}

export default App;
