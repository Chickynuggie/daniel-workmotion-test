import ACTIONTYPES from "../actionTypes";
import { Dispatch } from "@reduxjs/toolkit";
import EmployeeStates from "../../../models/EmployeeStates";

export const clearEmployeeFilter = () => (dispatch: Dispatch) => {
  dispatch({ type: ACTIONTYPES.FILTER.CLEAR_EMPLOYEE_FILTER });
};

export const setEmployeeFilter = (state: EmployeeStates) => (dispatch: Dispatch) => {
  dispatch({ type: ACTIONTYPES.FILTER.SET_EMPLOYEE_FILTER, payload: state });
};
