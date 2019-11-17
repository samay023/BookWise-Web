import React from "react";
import Flexbox from 'flexbox-react';
import {FormControl } from "react-bootstrap";

const SessionDetails = () => {

    return (
        <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
            <Flexbox element="header">
                <p className="title">Birthday Shoot</p>
            </Flexbox>
            <Flexbox flexDirection="column" element="div">
                <p>Share this single session with your client once you have filled out the details and have set a date and time.</p>
                <hr style={{marginLeft:"0px", marginRight:"0px"}}/>
            </Flexbox>
            <Flexbox element="header" flexDirection="column" alignItems="baseline">
                <p><i className="fas fa-camera-retro"/>
                &nbsp;<strong>Session Details</strong></p>
                <Flexbox flexDirection="column" style={{marginLeft:'22px'}} element="div">
                    <p>Birthday shoot with a client in West Ryde. Booked by Alan on the 22nd of November</p>
                    <p><strong>Total Fee: </strong>$150 AUD</p>
                    <p><i className="far fa-address-card"/>&nbsp;<strong>Location: </strong>14 Maxim Drive, West Ryde 2114, NSW</p>
                    <p><i className="far fa-calendar-alt"/>&nbsp;<strong>Date: </strong>December 12th, 2019</p>
                    <p><i className="far fa-clock" />&nbsp;<strong>Time: </strong>09:00 AM - 12:00PM</p>
                    <hr style={{marginLeft:"0px", marginRight:"0px"}}/>
                </Flexbox>
            </Flexbox>
            <Flexbox flexDirection="column" element="header">
                <p><i className="far fa-clipboard"/>&nbsp;<strong>Session notes</strong></p>
                <Flexbox flexDirection="column" style={{marginLeft:'18px'}} element="div">
                    <p className="InformationText">Notes are only visible to you. List your to-dos, or jot down reminders to yourself.</p>
                </Flexbox>
                <FormControl as="textarea" />
                <hr style={{marginLeft:"0px", marginRight:"0px"}}/>
            </Flexbox>
            <Flexbox flexDirection="column" element="header">
                <p><i className="fas fa-history"/>&nbsp;<strong>Activity</strong></p>
                <Flexbox flexDirection="row" alignItems="baseline" style={{marginLeft:'22px'}} element="div">
                    <p><i className="fas fa-plus-circle"/>&nbsp; Session created</p>
                    <p className="InformationText">&nbsp; 2 days ago</p>
                </Flexbox>
                <Flexbox flexDirection="row" alignItems="baseline" style={{marginLeft:'22px'}} element="div">
                    <p><i className="fas fa-plus-circle"/>&nbsp; Client added</p>
                    <p className="InformationText">&nbsp; 1 day ago</p>
                </Flexbox>
                <hr style={{marginLeft:"0px", marginRight:"0px"}}/>
            </Flexbox>
        </Flexbox>)
}

export default SessionDetails;