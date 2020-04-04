import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {

    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}
const mapDispatchToProps = dispatch =>{
  return {add_restaurant: () => dispatch({type: "ADD_RESTAURANT"})}
}

export default connect(mapStateToProps,mapDispatchToProps)(Restaurants);
