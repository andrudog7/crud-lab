import React, { Component } from 'react';
import {connect} from 'react-redux'

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleInput = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleRestaurantSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleRestaurantSubmit}>
          <label>Name of Restaurant</label>
          <br></br>
          <input type="text" name="name" value={this.state.text} onChange={this.handleInput} />
          <br></br>
          <input type="submit" value="New Restaurant"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput
