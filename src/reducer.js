import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./actions";
// reducer
// two arguments - state, action
// state = old state/state before update
// action = what happened / what update
// return updated  (or old) state
const reducer = (state, action) => {
  //   console.log("in reducer", action.type);
  switch (action.type) {
    case CLEAR_CART:
      //   console.log(CLEAR_CART);
      return {
        ...state,
        cart: [],
      };
    case DECREASE:
      console.log(DECREASE);
      return state;
    case INCREASE:
      console.log(INCREASE);
      return state;
    case REMOVE:
      console.log(REMOVE);
      console.log(action.payload.id);

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
