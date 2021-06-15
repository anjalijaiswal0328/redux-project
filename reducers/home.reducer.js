import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../constants";

const initialState = {
  count: 0,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
export default homeReducer;
