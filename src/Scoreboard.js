import React, { Component } from 'react'
// import './App.css';

class Scoreboard extends Component {
  addScore(e){
    // console.log(e.target.value)
    this.props.onAddScore(this.props.id, e.target.value)
  }

  render(){
    return(
      <div className='container'>
        <input className='player'/>
        <h2>{this.props.score}</h2>
        <input
          className='addScore'
          onChange={this.addScore.bind(this)}
        />
      </div>
    )
  }
}

export default Scoreboard;
