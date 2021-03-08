import cuid from 'cuid';
import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ""
  }

  handleReviewInput = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  submitReview = (event) => {
    event.preventDefault()
    let review = {text: this.state.text,
                  id: cuid(),
                  restaurantId: this.props.restaurantId}
    this.props.addReview(review)
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div >
        <form onSubmit={this.submitReview}>
          <label>Add Review</label>
          <br></br>
          <input type="text" name="text" value={this.state.text} onChange={this.handleReviewInput}></input>
          <input type="submit" value="New Review"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
