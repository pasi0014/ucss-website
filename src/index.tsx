import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./components/Wrappper";
import { AuthProvider } from "react-auth-kit";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Wrapper>
    <AuthProvider
      authType={"cookie"}
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Wrapper>
);
