import { combineReducers } from "redux";
import homeReducer from "./home.reducer";
import aboutReducer from "./about.reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  about: aboutReducer,
});

export default rootReducer;
