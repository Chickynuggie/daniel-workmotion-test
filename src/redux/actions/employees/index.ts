import ACTIONTYPES from "../actionTypes";
import { Dispatch } from 'redux';
import { fetchEmployees, fetchEmployeeById } from "../../../api";
import EmployeeStates from "../../../models/EmployeeStates";

export const getEmployees = () => (dispatch: Dispatch) => {
  fetchEmployees().then(response => {
    dispatch({ type: ACTIONTYPES.EMPLOYEES.SET_EMPLOYEES, payload: response.data });
  });
};

export const getEmployeeById = (id: number) => (dispatch: Dispatch) => {
  fetchEmployeeById(id).then(response => {
    dispatch({ type: ACTIONTYPES.EMPLOYEES.SET_EMPLOYEE_FOCUS, payload: response.data });
  });
};
