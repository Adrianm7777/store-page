import React from "react";
import ReactDOM from "react-dom/client";
import "./Scss/Global/_globals.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReduxProvider from "./Redux/ReduxProvider/ReduxProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
