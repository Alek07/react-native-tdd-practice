import { applyMiddleware, compose, createStore } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";

import reducers from "./root.reducer";

let middlewares = [thunk, promise];

const configureStore = () => {
  return createStore(reducers, compose(applyMiddleware(...middlewares)));
};

const store = configureStore();

export { store };