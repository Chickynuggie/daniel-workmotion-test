import EmployeeStates from './EmployeeStates'

interface Employee {
  id: string,
  firstName: string,
  lastName: string,
  status: EmployeeStates
}

export default Employee;
