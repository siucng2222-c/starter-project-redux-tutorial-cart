import React from "react";
import { connect } from "react-redux";
import {
  DECREASE,
  INCREASE,
  REMOVE,
  TOGGLE_AMOUNT,
  removeItem,
} from "../actions";

const CartItem = ({
  img,
  title,
  price,
  amount,
  remove,
  increase,
  decrease,
  toggle,
}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={remove}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button
          className="amount-btn"
          onClick={() => {
            // increase();
            return toggle("inc");
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) return remove();
            // else decrease();
            else return toggle("dec");
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps = the props of this component
  const { id, amount } = ownProps;

  // REMEMBER to return an arrow function object
  // otherwise dispatch function will call directly when component render
  return {
    // Below map dispatch action type REMOVE to prop.remove
    // in addition, pass in payload object
    // and reference through "account" argument in reducer
    // remove: () => dispatch({ type: REMOVE, payload: { id } }),
    // Action Creators: Define type and payload spec directly in actions.js. Thus we don't need to re-write that in each different components
    remove: () => dispatch(removeItem(id)),
    increase: () => dispatch({ type: INCREASE, payload: { id, amount } }),
    decrease: () => dispatch({ type: DECREASE, payload: { id, amount } }),

    // Refactor code to use single function for toggle increase or decrease amount
    toggle: (toggleAction) =>
      dispatch({ type: TOGGLE_AMOUNT, payload: { id, toggleAction } }),
  };
};
// No need to map state object to props, only need to map dispatch)( function)
export default connect(null, mapDispatchToProps)(CartItem);
