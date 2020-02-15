import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarMenu from "./components/layouts/Navbar";
import HomePage from "./components/layouts/HomePage/HomePage";
import Routes from "./components/routes/Routes";
import AuthContext from "./context/authContext";

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
//   },
// });

const App = () => {


  const [authContext, setAuthData] = useState({
    isAuthenticated: !!localStorage.getItem('token'),
    userID:"-1",
    email:"test",
    name:"test"
  });

  return (
    <ApolloProvider client={client}>
        <AuthContext.Provider value={[authContext,setAuthData]}>
          <Router>
            <NavbarMenu />
              <div className="AllElements">
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route component={Routes} />
                  </Switch>
              </div>
          </Router>
        </AuthContext.Provider>    
      </ApolloProvider>
  );
  };

export default App;
