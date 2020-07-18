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
  console.log({ state, action });

  // ALWAYS return state (either updated or old) from reducer
  return state;
};
const store = createStore(reducer, initialStore);
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
