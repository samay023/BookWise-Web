import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarMenu from "./components/layouts/Navbar";
import SessionMenu from "./components/layouts/Session";

const App = () => (
  <div>
    <NavbarMenu />
    <div className='Container'>
      <SessionMenu />
    </div>
  </div>
);

export default App;
