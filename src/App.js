import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import * as ROUTES from "./constant/Routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/Routes";
import useAuthListener from "./hooks/useAuthListener";

function App() {
  let { user } = useAuthListener();
  return (
    <div className="app">
      <Router>
        <Switch>
          <IsUserRedirect
            exact
            path={ROUTES.LOGIN}
            user={user}
            loggedInPath={ROUTES.HOME}
          >
            <Login />
          </IsUserRedirect>
          <IsUserRedirect
            exact
            path={ROUTES.SIGNUP}
            user={user}
            loggedInPath={ROUTES.HOME}
          >
            <Signup />
          </IsUserRedirect>
          <ProtectedRoute exact path={ROUTES.HOME} user={user}>
            <Home />
          </ProtectedRoute>
          <Route>
            <h1>Oops Wrong Page !!!</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
