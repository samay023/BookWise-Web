import { Container, Row, Col} from "react-bootstrap";
import React, {useState} from "react";
import "./Session.css";

const SessionList = () => {
    const [row, activeRow] = useState({
        key: "1",
        selected : true
    });

    const setActiveRow = (event) => {
        activeRow({key: event.currentTarget.id,selected:true});
    };

  return (
    <Container className="CurrentSessions">
    <div>
      <Row className="title">December, 2019</Row>
      <Row id="1" onClick={setActiveRow.bind(this)} className={`SessionDetails ${row.key === "1" ? 'active' : ''}`}>
          <Col className="Date">12 - Thu</Col>
          <Col>Birthday Shoot</Col>
      </Row>
      <Row id="2" onClick={setActiveRow.bind(this)} className={`SessionDetails ${row.key === "2" ? 'active' : ''}`}>
          <Col className="Date">15 - Sun</Col>
          <Col>Indoor shoot</Col>
      </Row>
    </div>
    <div>
        <Row className="title">January, 2020</Row>
        <Row id="3" onClick={setActiveRow.bind(this)} className={`SessionDetails ${row.key === "3" ? 'active' : ''}`}>
            <Col className="Date">01 - Mon</Col>
            <Col>Birthday Shoot</Col>
        </Row>
        <Row id="4" onClick={setActiveRow.bind(this)} className={`SessionDetails ${row.key === "4" ? 'active' : ''}`}>
            <Col className="Date">30 - Tues</Col>
            <Col>Indoor shoot</Col>
        </Row>
    </div>
    <div>
        <Row className="title">Februray, 2020</Row>
        <Row id="5" onClick={setActiveRow.bind(this)} className={`SessionDetails ${row.key === "5" ? 'active' : ''}`}>
            <Col className="Date">15 - Wed</Col>
            <Col>Birthday Shoot</Col>
        </Row>
        <Row id="6" onClick={setActiveRow.bind(this)} className={`SessionDetails ${row.key === "6" ? 'active' : ''}`}>
            <Col className="Date">25 - Fri</Col>
            <Col>Indoor shoot</Col>
        </Row>
      </div>
  </Container>
  );
};

export default SessionList;
