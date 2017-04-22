import React, { Component } from 'react'

class ScoreForm extends Component{
  handleSubmit(e){
    e.preventDefault()
    const form = document.getElementById('form')
    const newScore = document.getElementById('newScore').value
    this.props.onAddScore(newScore)
    this.props.onDisplayScore(newScore)
    form.reset()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} id='form'>
          <input type='text' id='newScore'/>
          <input type='submit' className='scoreSubmit'/>
        </form>
      </div>
    )
  }
}

export default ScoreForm
