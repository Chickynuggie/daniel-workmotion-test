import EmployeeStates from './EmployeeStates'

interface Employee {
  id: Number,
  firstName: String,
  lastName: String,
  status: EmployeeStates
}

export default Employee;
