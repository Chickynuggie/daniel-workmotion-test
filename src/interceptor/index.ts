import axios from "axios";
import ACTIONTYPES from "../redux/actions/actionTypes";

const Interceptor = (store: any) => {
  axios.interceptors.request.use(
    (config) => {
      store.dispatch({ type: ACTIONTYPES.SPINNER.START_SPINNING });
      return config;
    },
    (error) => {
      store.dispatch({ type: ACTIONTYPES.SPINNER.STOP_SPINNING });
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      store.dispatch({ type: ACTIONTYPES.SPINNER.STOP_SPINNING });
      return response;
    },
    (error) => {
      store.dispatch({ type: ACTIONTYPES.SPINNER.STOP_SPINNING });
      return Promise.reject(error);
    }
  );
};

export default Interceptor;
