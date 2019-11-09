import { Row, Col } from "react-bootstrap";
import React from "react";
import "./NavbarStyle.css";

const NavbarMenu = () => {
  return (
    <div className='NavBar'>
      <Row>
        <Col>
          <span className='hide-sm'> BookWise</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <i className='fas fa-users-cog'></i>
          <span className='hide-sm'> Admin</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <i className='fas fa-camera-retro' />
          <span className='hide-sm'> Session</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <i className='fas fa-address-book' />
          <span className='hide-sm'> Clients</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <i className='fas fa-cogs' />
          <span className='hide-sm'> Account</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'> Logout</span>
        </Col>
      </Row>
    </div>
  );
};

export default NavbarMenu;
