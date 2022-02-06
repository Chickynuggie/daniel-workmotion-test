import Employees from './Employees';
import Filter from './Filter';
import Spinner from './Spinner';

interface State {
  employees: Employees,
  spinner: Spinner,
  filter: Filter
}

export default State;
