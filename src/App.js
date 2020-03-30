import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

export class App extends Component {
  render() {
    console.log(this.props.store)
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

export default App;
