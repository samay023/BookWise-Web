import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import AuthContext from "../../context/authContext";

const NavbarMenu = () => {

  const [ authContext ] = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  // Need to check if the user is logged in 
  // Otherwise hide the navbar. 

  if (!isAuthenticated){
    return null
  };

  return (
    <div className='NavBar'>
      <Row id="title">
        <Link to="/">
          <span className='hide-sm'> BookWise</span>
        </Link>
      </Row>
      <div className="MenuItems">
        <Row>
          <Link to="/session">
            <i className='fas fa-camera-retro' />
            <span className='hide-sm'> Sessions</span>
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
