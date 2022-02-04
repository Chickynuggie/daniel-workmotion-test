import ACTIONTYPES from "../../actions/actionTypes";
import initialState from "../../store";
import { PayloadAction } from "@reduxjs/toolkit";

const filterReducer = (
  state: object = initialState.filter,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case ACTIONTYPES.FILTER.CLEAR_EMPLOYEE_FILTER:
      return { ...state, activeFilter: '' };
    case ACTIONTYPES.FILTER.SET_EMPLOYEE_FILTER:
      return { ...state, activeFilter: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
