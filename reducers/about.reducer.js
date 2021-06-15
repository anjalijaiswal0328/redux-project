import { UPDATE_TITLE } from "../constants";

const initialState = {
  title: "Hello World",
};

function aboutReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
}

export default aboutReducer;
