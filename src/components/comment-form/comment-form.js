import React, { Component } from 'react'

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <div>
        <b>Username:</b>
        <br/>
        <input value={this.state.user} onChange={this.handleUserChange}/>
        <br/>
        <b>Text:</b>
        <br/>
        <textarea name="comment" cols="40" rows="3" value={this.state.text} onChange={this.handleTextChange}></textarea>
        <br/>
        <input type="submit" value="Submit" onClick={this.handleSubmitClick}/>
      </div>
    )
  }

  handleUserChange = (event) => {
    event.preventDefault()

    this.setState({
      user: event.target.value
    })
  }

  handleTextChange = (event) => {
    event.preventDefault()

    this.setState({
      text: event.target.value
    })
  }

  handleSubmitClick = () => {
    console.log(this.state.user)
    console.log(this.state.text)
  }
}

export default CommentForm