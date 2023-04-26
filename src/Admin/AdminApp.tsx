import React, { useContext } from "react";
import { injectIntl } from "react-intl";

/**
 * All routes should be defined in this file
 * Maybe I should add a layout page?
 * It is something to consider
 * N.P
 *
 */
import { Route, RouteProps, BrowserRouter, Routes } from "react-router-dom";
import Admin from "../layouts/Admin";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Login from "./containers/Login";
import Register from "./containers/Register";

const AdminApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route
          path="dashboard"
          element={
            <div className="h-full bg-blue-300">
              <h1 className="">TEST</h1>
            </div>
          }
        />
      </Route>
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
    </Routes>
  );
};

export default AdminApp;
