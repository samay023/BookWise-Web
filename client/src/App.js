import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarMenu from "./components/layouts/Navbar";
import Session from "./components/layouts/Session/Session";

const App = () => (
  <div className="AllElements">
    <NavbarMenu />
    <div className='Container'>
      <Session />
    </div>
  </div>
);

export default App;
