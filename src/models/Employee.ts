import EmployeeStates from './EmployeeStates'

interface Employee {
  id: number,
  firstName: String,
  lastName: String,
  status: EmployeeStates
}

export default Employee;
