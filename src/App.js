import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// UI > Action > Reducer > Store > UI...

// store - stores data, think of state
// reducer - function that used to update store

import { createStore } from "redux";

// initial store
const initialStore = { count: 0 };

// reducer
// two arguments - state, action
// state = old state/state before update
// action = what happened / what update
// return updated  (or old) state
let reducer = (state, action) => {
  console.log("in reducer");
  console.log({ state, action });

  if (action.type === "DECREASE") {
    console.log("Decrease Action triggered");

    // DON't do this - State should be IMMUTABLE
    // state.count = state.count - 1;

    // Make copy with updated state instead
    return { count: state.count - 1 };
  }
  // ALWAYS return state object (either updated or old) from reducer to ensure consistency
  return state;

  // Test return string when createStore, then return object after action
  // return "String instead of state object";
};
console.log("createStore");
const store = createStore(reducer, initialStore);

// dispatch method - send actions to the store
// action(objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)
// Below call trigger the reducer
console.log("dispatch");
store.dispatch({ type: "DECREASE" });

// Trigger dispatch multiple times to test update state multiple times (through reducer)
// store.dispatch({ type: "DECREASE" });
// store.dispatch({ type: "DECREASE" });
// store.dispatch({ type: "DECREASE" });
// store.dispatch({ type: "DECREASE" });
// store.dispatch({ type: "DECREASE" });

// Test un-recognized action type
store.dispatch({ type: "UNRECOGNIZED" });

// Redux store can be passed to React component
console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      {/* Pass Redux store to react component as prop */}
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
