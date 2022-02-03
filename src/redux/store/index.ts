const initialState = Object.freeze({
  employees: {
    employees: [],
    filteredEmployees: [],
    focused: null
  },
  spinner: {
    isSpinning: false,
  },
});

export default initialState;
