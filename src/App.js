import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// reducer
import reducer from "./reducer";
// react-redux:
// Provider = wraps the whole react app
// connect = used in components
import { Provider } from "react-redux";

// redux stuff
// UI > Action > Reducer > Store > UI...

// store - stores data, think of state
// reducer - function that used to update store
import { createStore } from "redux";

// items
// import cartItems from "./cart-items";
// initial store
// const initialStore = {
//   cart: cartItems,
//   total: 10,
//   amount: 5,
// };

// redux store
// const store = createStore(reducer, initialStore);
// Can initialize store in reducer instead
// const store = createStore(reducer);
// Can initialize store and Redux devtools in browser
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
