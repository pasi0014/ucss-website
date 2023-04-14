import React, { useContext } from "react";
import { injectIntl } from "react-intl";

/**
 * All routes should be defined in this file
 * Maybe I should add a layout page?
 * It is something to consider
 * N.P
 *
 */
import {
  Redirect,
  Route,
  RouteProps,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import LoginForm from "./components/LoginForm";
import { Helmet } from "react-helmet";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const AdminApp: React.FC = () => {
  const { user, login } = useAuth();

  const doLogin = () => {
    console.log("doLogin");
    const res = login("test");
    console.log({ res });
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>CRM - Ukrainian Canadian Social Services</title>
      </Helmet>
      <BrowserRouter basename="/administration">
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute path="/">
            <div>Authenticated app here</div>
            {/* <App /> */}
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default AdminApp;
