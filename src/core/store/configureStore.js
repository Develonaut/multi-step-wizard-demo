import { reducers } from "core/store/reducers";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const configureStore = () => {
  const middleware = applyMiddleware(thunk);
  const store = createStore(reducers(), composeWithDevTools(middleware));
  return {
    store
  };
};
