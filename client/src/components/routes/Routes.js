import React,{useContext} from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import NotFound from "../layouts/NotFound";
import Session from "../layouts/Session/Session.js";
import Client from "../layouts/Client/Client";
import Account from "../layouts/Account/Account";
import HomePage from "../layouts/HomePage/HomePage";
import AuthContext from "../../context/authContext";

const Routes = () => {
  const [authData] = useContext(AuthContext);
  const { isAuthenticated } = authData
  if (isAuthenticated){
    return (
      <div className="Container">
        <Switch>
          <Route exact path="/session" component={Session} />
          <Route exact path="/clients" component={Client} />
          <Route exact path="/account" component={Account} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
  else{
    return <Redirect to="/" component={HomePage} />
  }
  
};

export default Routes;
