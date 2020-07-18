import { DECREASE, INCREASE } from "./actions";

// reducer
// two arguments - state, action
// state = old state/state before update
// action = what happened / what update
// return updated  (or old) state
const reducer = (state, action) => {
  console.log("in reducer");
  console.log({ state, action });

  switch (action.type) {
    case DECREASE:
      console.log("Decrease Action triggered");

      // DON't do this - State should be IMMUTABLE
      // state.count = state.count - 1;

      // Make copy with updated state instead
      // return { count: state.count - 1 };

      // If initialStore return multiple attributes, the above return object which have one attribute only will ruin the state
      // So should copy the old object before update new value
      return { ...state, count: state.count - 1 };
    case INCREASE:
      console.log("Increase Action triggered");
      return { ...state, count: state.count + 1 };
    // case RESET:
    //   console.log("RESET Action triggered");
    //   return { ...state, count: 0 };
    // case CHANGE_NAME:
    //   console.log("CHANGE_NAME Action triggered");
    //   return { ...state, name: "Bob" };
    default:
      // ALWAYS return state object (either updated or old) from reducer to ensure consistency
      console.log("Default action");
      return state;

    // Test return string when createStore, then return object after action
    // return "String instead of state object";
  }
};

export default reducer;
