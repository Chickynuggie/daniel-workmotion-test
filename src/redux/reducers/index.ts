import { combineReducers } from "redux";
import employeesReducer from "./employees";
import spinnerReducer from "./spinner";

const rootReducer = combineReducers({
  employees: employeesReducer,
  spinner: spinnerReducer,
});

export default rootReducer;
