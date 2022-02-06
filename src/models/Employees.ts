import Employee from './Employee';
import EmployeeStates from './EmployeeStates';

interface Employees {
  employees: Array<Employee>,
  filter: EmployeeStates,
  focused: Employee
}

export default Employees;
