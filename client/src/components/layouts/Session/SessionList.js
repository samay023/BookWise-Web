import { Container, Row, Col} from "react-bootstrap";
import React from "react";
import "./Session.css";

const SessionList = () => {
  return (
    <Container className="CurrentSessions">
    <div>
      <Row className="title">December, 2019</Row>
      <Row className="SessionDetails" active="true">
          <Col className="Date">12 - Thu</Col>
          <Col>Birthday Shoot</Col>
      </Row>
      <Row className="SessionDetails">
          <Col className="Date">15 - Sun</Col>
          <Col>Indoor shoot</Col>
      </Row>
    </div>
    <div>
        <Row className="title">January, 2020</Row>
        <Row className="SessionDetails">
            <Col className="Date">01 - Mon</Col>
            <Col>Birthday Shoot</Col>
        </Row>
        <Row className="SessionDetails">
            <Col className="Date">30 - Tues</Col>
            <Col>Indoor shoot</Col>
        </Row>
    </div>
    <div>
        <Row className="title">Februray, 2020</Row>
        <Row className="SessionDetails">
            <Col className="Date">15 - Wed</Col>
            <Col>Birthday Shoot</Col>
        </Row>
        <Row className="SessionDetails">
            <Col className="Date">25 - Fri</Col>
            <Col>Indoor shoot</Col>
        </Row>
      </div>
      <div>
        <Row className="title">March, 2020</Row>
        <Row className="SessionDetails">
            <Col className="Date">15 - Wed</Col>
            <Col>Birthday Shoot</Col>
        </Row>
        <Row className="SessionDetails">
            <Col className="Date">25 - Fri</Col>
            <Col>Indoor shoot</Col>
        </Row>
      </div>
      <div>
        <Row className="title">April, 2020</Row>
        <Row className="SessionDetails">
            <Col className="Date">15 - Wed</Col>
            <Col>Birthday Shoot</Col>
        </Row>
        <Row className="SessionDetails">
            <Col className="Date">25 - Fri</Col>
            <Col>Indoor shoot</Col>
        </Row>
      </div>
  </Container>
  );
};

export default SessionList;
