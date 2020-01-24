import { AppPresentation } from "core/App";
import { configureStore } from "core/store/configureStore";
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import "index.css";

const { store } = configureStore();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
  <Provider store={store}>
    <AppPresentation />
  </Provider>,
  document.getElementById("root")
);
