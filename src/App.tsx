import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard/:clientId">
          <DashboardPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
