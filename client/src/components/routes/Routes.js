import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layouts/NotFound";
import Session from "../layouts/Session/Session.js";
import Client from "../layouts/Client/Client";
import Account from "../layouts/Account/Account";

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/session" component={Session} />
        <Route exact path="/clients" component={Client} />
        <Route exact path="/account" component={Account} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
