import Employees from "./Employees";
import Filter from './Filter';

interface State {
  employees: Employees,
  isSpinning: Boolean,
  filter: Filter
}

export default State;
