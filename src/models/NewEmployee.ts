import EmployeeStates from "./EmployeeStates";

interface NewEmployee {
  firstName: string,
  lastName: string,
  status: EmployeeStates,
  id: string
}

export default NewEmployee;
