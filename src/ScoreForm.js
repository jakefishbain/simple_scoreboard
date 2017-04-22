import React, { Component } from 'react'

class ScoreForm extends Component{
  handleSubmit(e){
    e.preventDefault()
    const newScore = (document.getElementById('newScore').value)
    this.props.onAddScore(newScore)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} name='form'>
          <input type='text' id='newScore'/>
          <input type='submit' id='submit' value='Add'/>
        </form>
      </div>
    )
  }
}

export default ScoreForm
