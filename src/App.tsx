import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import DashboardPage from "./pages/DashboardPage";
import SelectAccountPage from "./pages/SelectAccountPage";
import AccountPage from "./pages/AccountPage";
import ClientPage from "./pages/ClientPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/admin/accounts">
          <AccountPage />
        </Route>
        <Route path="/admin/clients/:accountId">
          <ClientPage />
        </Route>
        <Route path="/account/:clientId">
          <SelectAccountPage />
        </Route>
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
