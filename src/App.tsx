import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CustomPageHeader from "./components/CustomPageHeader";
import rootReducer from "./redux/reducers";
import initialState from "./redux/store";
import Interceptor from "./interceptor";

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, enhancer);

Interceptor(store);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <CustomPageHeader></CustomPageHeader>
      </Provider>
    </>
  );
};

export default App;
