import ACTIONTYPES from "../../actions/actionTypes";
import initialState from "../../store";
import { PayloadAction } from "@reduxjs/toolkit";

const spinnerReducer = (
  state: object = initialState,
  action: PayloadAction<any>
) => {
  switch (action.type) {
    case ACTIONTYPES.SPINNER.START_SPINNING:
      return { ...state, isSpinning: true };
    case ACTIONTYPES.SPINNER.STOP_SPINNING:
      return { ...state, isSpinning: false };
    default:
      return state;
  }
};

export default spinnerReducer;
