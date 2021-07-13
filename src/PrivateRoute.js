import React from 'react'
import {  Route, Redirect } from "react-router-dom";
import { isAuth } from "./helpers/utils";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/singin",
            }}
          />
        )
      }
    />
  );

export default PrivateRoute
