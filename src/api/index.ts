import axios from "axios";
import NewEmployee from "../models/NewEmployee";

const backendUrl = `http://localhost:3004`;

export const fetchEmployees = () => axios.get(`${backendUrl}/employees`);

export const fetchEmployeeById = (id: string) =>
  axios.get(`${backendUrl}/employees/${id}`);

export const createEmployee = (newEmployee: NewEmployee) =>
  axios.post(`${backendUrl}/employees`, newEmployee);

export const updateEmployee = (id: string, employeeData: NewEmployee) =>
  axios.patch(`${backendUrl}/employees/${id}`, employeeData);

export const deleteEmployee = (id: string) =>
  axios.delete(`${backendUrl}/employees/${id}`);
