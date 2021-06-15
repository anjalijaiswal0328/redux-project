import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// const initialState = {
//   count: 0,
//   title: "",
// };

// rootReducer = (state, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(thunk), window.devToolsExtension())
);

export default store;
