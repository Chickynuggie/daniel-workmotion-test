import axios from "axios";

const backendUrl = `http://localhost:3004`;

export const fetchEmployees = () => axios.get(`${backendUrl}/employees`);

export const fetchEmployeeById = (id: Number) => axios.get(`${backendUrl}/employees/${id}`);
