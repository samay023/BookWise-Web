import React,{Fragment, useState} from "react";
import Flexbox from 'flexbox-react';
import {FormControl, Button, Modal } from "react-bootstrap";
import Moment from "moment";
import AddClient from "../Client/AddClient";
import ExistingClients from "../Client/ExistingClients";

const SessionDetails = (props) => {

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
    };
    const handleOpen = () => {
        setShow(true);
    };

    const ClientDetails = ({session}) => {

        const [optionSelected, setOption] = useState(false);

        const handleOptions = (evt) =>{
            setOption({
                option : evt.currentTarget.dataset.parent
            });
        };

        const Options = () => {

            if(optionSelected.option === 'Add'){
                return(
                    <AddClient />
                )
            }
            else if (optionSelected.option === 'Link'){
                return (<ExistingClients />)
            }
            else{
                return null;
            }
        };

        const ModalBody = () =>{
            return(
                <Fragment>
                    {!optionSelected && 
                    <Flexbox flexDirection="row" width="100%" alignItems="flex-start" display="inline-flex">
                        <Flexbox data-parent="Add" onClick={handleOptions} title="Add" className="clientColumns" flexDirection="column" alignItems="center" display="inline-flex">
                            <i className="fas fa-user-plus fa-3x" /><br/><p>Add a new client</p>
                        </Flexbox>
                        <Flexbox data-parent="Link" onClick={handleOptions} className="clientColumns" flexDirection="column" alignItems="center" display="inline-flex">
                            <i className="fas fa-link fa-3x" /> <br/><p>Link existing client</p>
                        </Flexbox>
                    </Flexbox>
                    }
                    
                    <Options />
                </Fragment>
                
            )
        };

        if(session.clientDetails){
                return(
                <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                    <p><i className="fas fa-address-book"/>&nbsp;<strong>Client Details</strong></p>
                    <p><strong>Client name: </strong>Alan Samuel</p>
                    <p><strong>Email: </strong>alansamuel@gmail.com</p>
                    <p><strong>Phone no: </strong>0433990909</p>
                </Flexbox>)
        }
        else{
            return(
                <Fragment>
                    <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                        <p><i className="fas fa-address-book"/>&nbsp;<strong>Client Details</strong></p>
                    </Flexbox>
                    <Button className="editButton" variant="outline-info" onClick={handleOpen}>Link Client</Button>
                    <Modal show={show} onHide={handleClose} size="md">
                        <Modal.Header closeButton>
                        <Modal.Title><i className='fas fa-address-book' /> Link Client</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <ModalBody /> </Modal.Body>
                        
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            )
        }
    }
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
            
            <ClientDetails session={sessions}/>       
            <hr/>

            <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                <p><i className="far fa-clipboard"/>&nbsp;<strong>Session notes</strong></p>
                <p className="InformationText">Notes are only visible to you. List your to-dos, or jot down reminders to yourself.</p>
                <FormControl as="textarea" style={{fontSize:'14px'}} value={sessions.notes} readOnly/>
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