export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  console.log("4")
  switch (action.type) {

    case 'ADD_RESTAURANT':
     // debugger
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant]
      }

    default:
      return state;

  }
};
