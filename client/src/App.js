import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarMenu from "./components/layouts/Navbar";
import Session from "./components/layouts/Session/Session";
import Routes from "./components/routes/Routes";


// Initial Apollo Client setup
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    // headers: {
    //   authorization: localStorage.getItem('token'),
    //   'client-name': 'BookWise',
    //   'client-version': '1.0.0',
    // },
    // fetchOptions: {
    //   credentials: "same-origin",
    // }
  }),
  resolvers:"",
  typeDefs:"",
});

// Writes login data 

// cache.writeData({
//   data: {
//     isLoggedIn: !!localStorage.getItem('token'),
//     cartItems: [],
//   },
// });


const App = () => (
  <ApolloProvider client={client}>
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
    </ApolloProvider>
);

export default App;
