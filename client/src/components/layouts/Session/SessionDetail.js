import React,{Fragment, useState} from "react";
import Flexbox from 'flexbox-react';
import {FormControl, Button, Modal } from "react-bootstrap";
import Moment from "moment";
import AddClient from "../Client/AddClient";
import ExistingClients from "../Client/ExistingClients";
import SessionAdd from "./SessionAdd";

const SessionDetails = (props) => {

    const {ReloadSessions} = props;

    // Displays the options when Edit client is clicked
    const ClientDetails = ({session}) => {

        const [optionSelected, setOption] = useState(false);

        const handleOptions = (evt) =>{
            setOption({
                option : evt.currentTarget.dataset.parent
            });
        };

        const [client, setClient] = useState({
            firstname:"",
            surname:"",
            email:"",
            mobilePhone:"",
            address: {
                streetNumber:"",
                streetName:"",
                suburb:"",
                postcode:"",
                state:""
            }
        });

        const [show, setShow] = useState(false);

        const handleClose = () => {
            
            // Save client
            console.log(client);
            console.log("Selected option is "+optionSelected.option);

            // Need to call useMutation to add / link client to the session
            
            //Reset the option
            setOption(false);
            // Reload session details
            ReloadSessions();
            // Finally close the modal
            setShow(false);
        };
        const handleOpen = () => {
            setShow(true);
        };

        const updateClient = (evt) =>{

            if(evt.target.dataset && evt.target.dataset.parent === "address"){
                client.address[evt.target.name] = evt.target.value;
            }
            else if(evt && evt.target && evt.target.name){
                client[evt.target.name] = evt.target.value;
            }
            setClient(client);

        }; 

        const ClientModal = () => {

            if(optionSelected.option === 'Add'){
                return(
                    <AddClient updateClient={updateClient} />
                )
            }
            else if (optionSelected.option === 'Link'){
                return (<ExistingClients session={session}/>)
            }
            else{
                return null;
            }
        };

        const DisplayOptions = () =>{
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
                    <ClientModal />
                </Fragment>
                
            )
        };

        const ClientExists = () =>{
            return (
                <Fragment>
                    <Button style={{marginLeft:"40%", position:"absolute"}} variant="outline-info" onClick={handleOpen}>Edit Client</Button>
                    <p><strong>Client name: </strong>{session.clientDetails.firstname + " "+ session.clientDetails.surname}</p>
                    <p><strong>Email: </strong>{session.clientDetails.email}</p>
                    <p><strong>Phone no: </strong>{session.clientDetails.mobilePhone}</p>
                </Fragment>
            );
        };

        const ClientDoesNotExist = () =>{
            return <Button className="sessionEdit" variant="outline-info" onClick={handleOpen}>Add Client</Button>
        }

        return(
            <Fragment>
                <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                    <p><i className="fas fa-address-book"/>&nbsp;<strong>Client Details</strong></p>
                    {session.clientDetails ? <ClientExists /> : <ClientDoesNotExist />}
                </Flexbox>
                <Modal show={show} onHide={handleClose} size="md">
                    <Modal.Header closeButton>
                    <Modal.Title><i className='fas fa-address-book' /> Link Client</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> <DisplayOptions /> </Modal.Body>
                    
                    <Modal.Footer>
                        <Button name="Cancel" variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button name="Save"variant="primary" onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
        
    }
    const sessions = props.session;
    
    return (
        sessions && (
            <Fragment>
                <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                    <Flexbox flexDirection="row" alignItems="baseline" display="inline-flex">
                        <p className="title">{sessions.title}</p>
                        {/* Pass in the edit flag and the session so we reuse the create session modal */}
                        <SessionAdd mode="Edit" session ={sessions} ReloadSessions={ReloadSessions} />
                        {/* <Button className="sessionEdit" style={{marginTop:"120px"}} variant="outline-info">Edit</Button> */}
                    </Flexbox>
                    <p>Share this single session with your client once you have filled out the details and have set a date and time.</p> 
                </Flexbox>
                <hr/>

            <Flexbox className="IndividualSessionDetails" flexDirection="column" alignItems="flex-start" display="inline-flex">
                <p><i className="fas fa-camera-retro"/> <strong>Session Details</strong></p>
                <p>{sessions.description}</p>
               
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
                <FormControl as="textarea" style={{fontSize:'14px', width:"400px", height:"auto"}} value={sessions.notes} readOnly/>
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