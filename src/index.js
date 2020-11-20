import React from "react";
import ReactDOM from "react-dom";

import UserProvider from "./services/UserProvider.jsx";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
