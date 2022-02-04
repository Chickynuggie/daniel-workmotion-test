import axios from "axios";
import NewEmployee from "../models/NewEmployee";

const backendUrl = `http://localhost:3004`;

export const fetchEmployees = () => axios.get(`${backendUrl}/employees`);

export const fetchEmployeeById = (id: Number) =>
  axios.get(`${backendUrl}/employees/${id}`);

export const createEmployee = (newEmployee: NewEmployee) =>
  axios.post(`${backendUrl}/employees`, newEmployee);

export const updateEmployee = (id: Number, employeeData: NewEmployee) =>
  axios.patch(`${backendUrl}/employees/${id}`, employeeData);
