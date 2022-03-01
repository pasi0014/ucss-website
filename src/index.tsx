import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import Wrapper from "./components/Wrappper";

ReactDOM.render(
  <Wrapper>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Wrapper>,

  document.getElementById("root")
);
