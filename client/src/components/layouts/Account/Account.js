import React, { Fragment } from "react";
import Flexbox from "flexbox-react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AccountStyle.css";

const profileInformation = () =>{
  return(
    <Fragment>
      <Flexbox flexDirection="row" alignItems="flex-start" display="inline-flex">
        <Flexbox element="header" width="150px">
          <p className="title"><strong>Profile Information</strong></p>
        </Flexbox>
        <Flexbox className="accountDetails" flexDirection="column">
          <p>Name: <strong>John Doe</strong></p>
          <p>Business Name: <strong>Portait Photography</strong></p>
          <p>Email: <strong>admin@PotraitPhotograhpy.com.au</strong></p>
          <p className="InformationText">This is the email address available to your clients during booking.</p>
        </Flexbox>
        <Button className="editButton" variant="outline-info">Edit</Button>
      </Flexbox>
      <hr/>
      <Flexbox flexDirection="row" alignItems="flex-start" display="inline-flex">
        <Flexbox element="header" width="150px">
          <p className="title"><strong>Receive Payments</strong></p>
        </Flexbox>
        <Flexbox className="accountDetails" flexDirection="column">
          <p>Setup your method of collecting payments from clients.</p>
        </Flexbox>
        <Button className="editButton" variant="outline-info">Edit</Button>
      </Flexbox>
      <hr/>
      <Flexbox flexDirection="row" alignItems="flex-start" display="inline-flex">
        <Flexbox element="header" width="150px">
          <p className="title"><strong>Google Calendar</strong></p>
        </Flexbox>
        <Flexbox className="accountDetails" flexDirection="row">
          <p><i className="far fa-calendar-alt"/> Sync your bookings with Google Calendar.</p>
        </Flexbox>
        <Button className="editButton" variant="outline-info">Edit</Button>
      </Flexbox>
      <hr/>
      <Flexbox flexDirection="row" alignItems="flex-start" display="inline-flex">
        <Flexbox element="header" width="150px">
          <p className="title"><strong>Affiliate Program</strong></p>
        </Flexbox>
        <Flexbox className="accountDetails" flexDirection="column">
          <p>Get rewarded for sharing the love.</p>
          <p>If you enjoy BookWise enough to recommend it to others, we’ll repay the favor.</p>
          <Link>Join Friends of Session Affiliate Program.</Link>
        </Flexbox>
      </Flexbox>
      <hr/>
      <Flexbox flexDirection="row" alignItems="flex-start" display="inline-flex">
        <Flexbox element="header" width="150px">
          <p className="title"><strong>Your Subscription</strong></p>
        </Flexbox>
        <Flexbox className="accountDetails" flexDirection="column">
          <p><strong>10 days remaining in your trial</strong></p>
          <p>Ready to choose a plan? <Link>Click here</Link></p>
        </Flexbox>
        <Button className="editButton" variant="outline-info">Edit</Button>
      </Flexbox>
      <hr/>
      <br/>
      <Flexbox flexDirection="row" alignItems="flex-start" display="inline-flex">
        <Flexbox element="header" width="150px">
          <p className="title"><strong>Contact Us</strong></p>
        </Flexbox>
        <Flexbox className="accountDetails" flexDirection="column">
          <p><strong>Have questions, or just want to give us feedback.</strong></p>
          <Link>Contact BookWise</Link>
        </Flexbox>
        <Button className="editButton" variant="outline-info">Edit</Button>
      </Flexbox>
    </Fragment>
  );
}

const Account = () => {
  return (
    <div className='container'>
      <h3>Account</h3>
      <br/>
      <p><strong>Login: </strong>JohnDoe@yahoo.com</p>
      <hr/>
      {profileInformation()}
    </div>
  );
};

export default Account;
