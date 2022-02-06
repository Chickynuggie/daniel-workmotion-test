const initialState = Object.freeze({
  employees: {
    employees: [],
    focused: null,
  },
  spinner: {
    isSpinning: false,
  },
  filter: {
    activeFilter: '',
  },
});

export default initialState;
