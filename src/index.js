import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

render(
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiPickersUtilsProvider>,
  document.querySelector("#root")
);
