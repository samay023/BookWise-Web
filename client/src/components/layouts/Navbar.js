import { Row } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

const NavbarMenu = () => {
  return (
    <div className='NavBar'>
      <Row id="title">
        <Link to="/">
          <span className='hide-sm'> BookWise</span>
        </Link>
      </Row>
      <div className="MenuItems">
        <Row>
          <Link to="/admin">
            <i className='fas fa-users-cog'></i>
            <span className='hide-sm'> Admin</span>
          </Link>
        </Row>
        <Row>
          <Link to="/session">
            <i className='fas fa-camera-retro' />
            <span className='hide-sm'> Session</span>
          </Link>
        </Row>
        <Row>
          <Link to="/clients">
            <i className='fas fa-address-book' />
            <span className='hide-sm'> Clients</span>
          </Link>
        </Row>
        <Row>
          <Link to="/account">
            <i className='fas fa-cogs' />
            <span className='hide-sm'> Account</span>
          </Link>
        </Row>
        <Row>
          <Link to="/logout">
            <i className='fas fa-sign-out-alt' />
            <span className='hide-sm'> Logout</span>
          </Link>
        </Row>
      </div>
    </div>
  );
};

export default NavbarMenu;
