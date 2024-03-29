import React, { Component } from 'react'

class ScoreForm extends Component{
  handleSubmit(e){
    e.preventDefault()
    const form = document.getElementById(`${this.props.id}form`)
    const newScore = document.getElementById(`${this.props.id}newScore`).value
    this.props.onAddScore(newScore)
    this.props.onDisplayScore(newScore)
    form.reset()
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} id={this.props.id + 'form'}>
          <input placeholder='Add to Score' type='tel' id={this.props.id + 'newScore'}/>
          <input type='submit' className='scoreSubmit'/>
        </form>
      </div>
    )
  }
}

export default ScoreForm
