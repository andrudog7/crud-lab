import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';


class Restaurant extends Component {

  handleDeleteButton = (event) => {
    this.props.deleteRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li id={this.props.key}>
          {restaurant.text}
          <button onClick={this.handleDeleteButton}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};



export default (Restaurant)
