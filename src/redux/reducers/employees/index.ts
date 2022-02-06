import ACTIONTYPES from '../../actions/actionTypes';
import initialState from '../../store';
import {PayloadAction} from '@reduxjs/toolkit';
import Employee from '../../../models/Employee';

const employeesReducer = (
    state: object = initialState.employees,
    action: PayloadAction<Employee> | PayloadAction<Array<Employee>>,
) => {
  switch (action.type) {
    case ACTIONTYPES.EMPLOYEES.SET_EMPLOYEES:
      return {...state, employees: action.payload};
    case ACTIONTYPES.EMPLOYEES.SET_EMPLOYEE_FOCUS:
      return {...state, focused: action.payload};
    case ACTIONTYPES.EMPLOYEES.CLEAR_EMPLOYEE_FOCUS:
      return {...state, focused: null};
    default:
      return state;
  }
};

export default employeesReducer;
