import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CustomPageHeader from "./components/CustomPageHeader";
import rootReducer from "./redux/reducers";
import initialState from "./redux/store";
import Interceptor from "./interceptor";
import EmployeeList from "./components/EmployeeList";
import Spinner from "./components/Spinner";

// For redux devtool
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, enhancer);

Interceptor(store);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Spinner></Spinner>
        <CustomPageHeader></CustomPageHeader>
        <EmployeeList></EmployeeList>
      </Provider>
    </>
  );
};

export default App;
