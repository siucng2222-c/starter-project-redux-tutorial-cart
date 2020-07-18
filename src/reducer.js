import { CLEAR_CART } from "./actions";
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
    default:
      return state;
  }
};

export default reducer;
