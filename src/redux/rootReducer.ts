import { combineReducers } from "redux";

import clockReducer from "./Clock/reducer";
import counterReducer from "./Counter/reducer";
import userDataReducer from "./UserData/reducer";

const rootReducer = combineReducers({
  clock: clockReducer,
  counter: counterReducer,
  userData: userDataReducer
});

export default rootReducer;
