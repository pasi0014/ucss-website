/**
 * All routes should be defined in this file
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import Admin from "../layouts/Admin";
// import Register from "./containers/Register";
import Login from "./containers/Login";
import { RequireAuth } from "react-auth-kit";

const AdminApp: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CRM - Ukrainian Canadian Socical Services</title>
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth loginPath="login">
              <Admin />
            </RequireAuth>
          }
        >
          <Route
            path="dashboard"
            element={
              <div className="h-full bg-blue-300">
                <h1 className="">TEST</h1>
              </div>
            }
          />
        </Route>
        {/* <Route path="/sign-up" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AdminApp;
