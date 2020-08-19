import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// REDUX SPECIFIC IMPORTS
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Grommet } from 'grommet';
import myTheme from "./styles/theme"

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Grommet theme={myTheme}> 
      <App />
      </Grommet>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
