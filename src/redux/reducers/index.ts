import { combineReducers } from "redux";
import employeesReducer from "./employees";
import spinnerReducer from "./spinner";
import filterReducer from "./filter";

const rootReducer = combineReducers({
  employees: employeesReducer,
  spinner: spinnerReducer,
  filter: filterReducer
});

export default rootReducer;
