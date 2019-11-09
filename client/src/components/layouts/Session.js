import { Row, Button, Container } from "react-bootstrap";
import React from "react";
import "./Session.css";

const SessionMenu = () => {
  return (
    <div className='Session'>
      <div className='SessionMenu'>
        <Button>
          <i className='fas fa-plus' /> Create a new Session
        </Button>
        <Container>
          <Row>Test</Row>
        </Container>
      </div>
    </div>
  );
};

export default SessionMenu;
