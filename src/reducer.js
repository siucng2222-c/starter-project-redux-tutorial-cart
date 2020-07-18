import {
  CLEAR_CART,
  DECREASE,
  INCREASE,
  REMOVE,
  GET_TOTAL,
  TOGGLE_AMOUNT,
} from "./actions";
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
      // console.log(DECREASE);
      // console.log(action.payload.amount);
      const decreasedCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }

        return item;
      });
      // .filter((item) => item.amount > 0);

      return { ...state, cart: decreasedCart };
    case INCREASE:
      // console.log(INCREASE);
      // console.log(action.payload.amount);
      const increasedCart = state.cart.map((item) => {
        if (item.id === action.payload.id)
          item = { ...item, amount: item.amount + 1 };
        return item;
      });
      return { ...state, cart: increasedCart };
    case REMOVE:
      // console.log(REMOVE);
      // console.log(action.payload.id);

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case GET_TOTAL:
      // console.log(GET_TOTAL);
      let { total, amount } = state.cart.reduce(
        (result, cartItem) => {
          // console.log(cartItem);
          const { price, amount } = cartItem;
          result.total += price * amount;
          result.amount += amount;
          return result;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    case TOGGLE_AMOUNT:
      console.log(TOGGLE_AMOUNT);
      // One function to handle both increase and decrease amount
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.toggleAction === "dec") {
              return (item = { ...item, amount: item.amount - 1 });
            }
            if (action.payload.toggleAction === "inc") {
              return (item = { ...item, amount: item.amount + 1 });
            }
          }
          return item;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
