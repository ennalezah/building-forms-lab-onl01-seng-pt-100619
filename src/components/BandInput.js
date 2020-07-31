// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  inputHandler = (event) => {
    this.setState({name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({name: ''});
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div><label>Band name </label>
          <input type="text" value={this.state.name} onChange={this.inputHandler} /></div>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
