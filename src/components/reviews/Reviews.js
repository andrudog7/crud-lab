import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  
  render() {
    let reviews
    if (this.props.reviews.length > 0) {
      reviews = this.props.reviews.filter(rev => rev.restaurantId === this.props.restaurant.id)
    .map(review => <Review review={review} deleteReview={this.props.deleteReview}/>)
  }

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;