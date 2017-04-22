import React, { Component } from 'react'
// import './App.css';

class Scoreboard extends Component {
  render(){
    return(
      <div className='container'>
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

export default Scoreboard;
