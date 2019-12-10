import { Container, Row, Col} from "react-bootstrap";
import React, {useState, Fragment, useEffect} from "react";
import SessionDetails from "./SessionDetail";
import "./Session.css";
import Moment from 'moment';

const SessionList = (props) => {
    const sortedSessions =  props.session;

    const [row, activeRow] = useState({
        key: 0,
        selected : true
    });

    const setActiveRow = (event) => {
        activeRow({key: Number(event.currentTarget.id),selected:true});
    };

    let currentMonth;
    let previousMonth;
    const DisplaySortedSessions = () => {

        return (sortedSessions.map((session, index) => {
               
            if(!previousMonth){
                // Loop just started
                currentMonth = Moment(session.sessionDate).format('MMMM, YYYY');
                previousMonth = Moment(session.sessionDate).format('MMMM, YYYY');
            }
            currentMonth = Moment(session.sessionDate).format('MMMM, YYYY');
            // If current Month and previous month is not same
            // We need to create a new List 
            if(currentMonth!==previousMonth){
                previousMonth = currentMonth;
                return (
                <Fragment key={index}>
                    <Row className="title">{currentMonth}</Row>
                    <Row id={index} onClick={setActiveRow.bind(this)} className={`SessionDetails ${row.key === index ? 'active' : ''}`}>
                        <Col className="Date">{Moment(session.sessionDate).format('DD - ddd')}</Col>
                        <Col>{session.title}</Col>
                    </Row>
                </Fragment>)
            }
            else{
                previousMonth = currentMonth;
                return (
                <Fragment key={index}>
                    {/* We need to display title if its the first session in the array */}
                    {index===0 && <Row className="title">{currentMonth}</Row>}
                    <Row id={index} onClick={setActiveRow.bind(this)} className={`SessionDetails ${row.key === index ? 'active' : ''}`}>
                        <Col className="Date">{Moment(session.sessionDate).format('DD - ddd')}</Col>
                        <Col>{session.title}</Col>
                    </Row>
                </Fragment>
                )
            }
                
            }));
        };

    return (
        <Fragment>
            <div className="SessionMenu">
                <Container className="CurrentSessions">
                    <DisplaySortedSessions />
                </Container>
            </div>
            <SessionDetails session={sortedSessions[row.key]}/>
        </Fragment>
    );
  };

export default SessionList;
