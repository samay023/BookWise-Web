import React,{Fragment} from "react";
import Flexbox from 'flexbox-react';
import {FormControl } from "react-bootstrap";
import Moment from "moment";

const SessionDetails = (props) => {

    const sessions = props.session;
    return (
        sessions && (
            <Fragment>
                <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                    <p className="title">{sessions.title}</p>
                    <p>Share this single session with your client once you have filled out the details and have set a date and time.</p> 
                </Flexbox>
                <hr/>

            <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                <p><i className="fas fa-camera-retro"/> <strong>Session Details</strong></p>
                <p>{sessions.description}. Booked by Alan on the {Moment(sessions.createdDate).format("MMMM Do, YYYY")} </p>
               
                <p><strong>Total Fee: </strong>{sessions.sessionFee}$</p>
                <p><i className="far fa-address-card"/>&nbsp;<strong>Location: </strong>
                {sessions.address.streetNumber+" "+sessions.address.streetName+", "
                +sessions.address.suburb+", "+sessions.address.postcode+" "+ sessions.address.state}</p>
                
                <p><i className="far fa-calendar-alt"/>&nbsp;<strong>Date: </strong>
                {Moment(sessions.sessionDate).format("MMMM Do, YYYY")}</p>
                
                <p><i className="far fa-clock" />&nbsp;<strong>Time: </strong>
                {Moment(sessions.sessionStartTime).format("LT")} -
                {" "+Moment(sessions.sessionEndTime).format("LT")}
                </p>
            </Flexbox>
            <hr/>
            
            <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                <p><i className="far fa-clipboard"/>&nbsp;<strong>Session notes</strong></p>
                <p className="InformationText">Notes are only visible to you. List your to-dos, or jot down reminders to yourself.</p>
                <FormControl as="textarea" style={{fontSize:'14px'}} value={sessions.notes}/>
            </Flexbox>
            <hr/>

            <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                <p><i className="fas fa-history"/>&nbsp;<strong>Activity</strong></p>
                <Flexbox flexDirection="row" alignItems="baseline" style={{marginLeft:'22px'}} element="div">
                    <p><i className="fas fa-plus-circle"/>&nbsp; Session created</p>
                    <p className="InformationText">&nbsp; {Moment(sessions.createdDate).fromNow("dd")} ago</p>
                </Flexbox>
            </Flexbox>
            <hr/>
            </Fragment>
        ));
}

export default SessionDetails;