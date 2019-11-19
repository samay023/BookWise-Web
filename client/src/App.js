import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarMenu from "./components/layouts/Navbar";
import Session from "./components/layouts/Session/Session";
import Routes from "./components/routes/Routes";
import store from "./Store";

// Redux stuff
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
      <Router>
        <div className="AllElements">
          <NavbarMenu />
          <div className="Container">
            <Switch>
              <Route exact path="/" component={Session} />
              <Route component={Routes} />
            </Switch>
          </div>
        </div>
      </Router>
  </Provider>
);




export default App;
