import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// action types
import { DECREASE, INCREASE } from "./actions";
// reducer
import reducer from "./reducer";

// redux stuff

// UI > Action > Reducer > Store > UI...

// store - stores data, think of state
// reducer - function that used to update store
import { createStore } from "redux";

// initial store
const initialStore = {
  count: 0,
  name: "John Doe",
};

console.log("createStore");
const store = createStore(reducer, initialStore);

// dispatch method - send actions to the store
// action(objects) - MUST HAVE TYPE PROPERTY - what kind of action
// DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)
// Below call trigger the reducer
console.log("dispatch");
store.dispatch({ type: DECREASE });

// Trigger dispatch multiple times to test update state multiple times (through reducer)
// store.dispatch({ type: "DECREASE" });
// store.dispatch({ type: "DECREASE" });
// store.dispatch({ type: "DECREASE" });
// store.dispatch({ type: "DECREASE" });
// store.dispatch({ type: "DECREASE" });

// Test un-recognized action type
// store.dispatch({ type: "UNRECOGNIZED" });

// Test other actions
store.dispatch({ type: INCREASE });
// store.dispatch({ type: RESET });
// store.dispatch({ type: CHANGE_NAME });

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
