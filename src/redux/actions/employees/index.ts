import ACTIONTYPES from "../actionTypes";
import { Dispatch } from 'redux';
import { fetchEmployees, fetchEmployeeById } from "../../../api";
import Employee from "../../../models/Employee";

export const getEmployees = () => (dispatch: Dispatch) => {
  fetchEmployees().then(response => {
    dispatch({ type: ACTIONTYPES.EMPLOYEES.SET_EMPLOYEES, payload: response.data });
  });
};

export const getEmployeeById = (id: string) => (dispatch: Dispatch) => {
  fetchEmployeeById(id).then(response => {
    dispatch({ type: ACTIONTYPES.EMPLOYEES.SET_EMPLOYEE_FOCUS, payload: response.data });
  });
};

export const setFocusedEmployee = (employee: Employee) => (dispatch: Dispatch) => {
  dispatch({ type: ACTIONTYPES.EMPLOYEES.SET_EMPLOYEE_FOCUS, payload: employee });
}

export const clearFocusedEmployee = () => (dispatch: Dispatch) => {
  dispatch({ type: ACTIONTYPES.EMPLOYEES.CLEAR_EMPLOYEE_FOCUS });
}
