import React, { Component } from 'react';
import Restaurant from './Restaurant.js'

class Restaurants extends Component {
  render() {
    let restaurants = this.props.restaurants.map(res => <Restaurant restaurant={res} key={res.id} deleteRestaurant={this.props.deleteRestaurant}/>)
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;