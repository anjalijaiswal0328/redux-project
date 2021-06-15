import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../constants";

export const incrementCounterAction = (payload) => (dispatch, getState) => {
  // api calls
  setTimeout(() => dispatch({ type: INCREMENT_COUNTER }), 1000);
};

export const decrementCounterAction = (payload) => (dispatch, getState) => {
  setTimeout(() => dispatch({ type: DECREMENT_COUNTER }), 1000);
};
