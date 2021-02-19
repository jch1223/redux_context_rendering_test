import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

import CounterProvider from "./context/CounterProvider";
import Counter from "./container/Counter";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <Counter />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
