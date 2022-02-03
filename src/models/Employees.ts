import Employee from "./Employee";

interface Employees {
  employees: Array<Employee>,
  filteredEmployees: Array<Employee>,
  focused: Employee
}

export default Employees;
