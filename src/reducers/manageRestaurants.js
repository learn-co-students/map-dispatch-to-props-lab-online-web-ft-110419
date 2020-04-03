export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      let newArray = state.restaurants.slice()
      newArray.push({name: action.restaurant.name, location: action.restaurant.location})
      return {
        ...state,
        restaurants: newArray
      }

    default:
      return state;

  }
};
