import React, {useState,useEffect} from "react";
import { Button, Modal, FormControl, InputGroup} from "react-bootstrap";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import Moment from 'moment';
import { useMutation } from '@apollo/react-hooks';
import { addSession } from "../../../resolvers/sessionResolver";

let globalState = {};

const SessionAdd = (props) => {
    const { mode, session, ReloadSessions } = props;
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };
    
    const [AddSessionInput, {error}] = useMutation(addSession);

    const runAddSessionInput = async () => {
        let variables = {
            title:String(globalState.title),    
            description:String(globalState.description),
            address:{
                streetNumber: Number(globalState.address.streetNumber),
                streetName: String(globalState.address.streetName),
                suburb: String(globalState.address.suburb),
                postcode: Number(globalState.address.postcode),
                state: String(globalState.address.state)
            },
            sessionFee:Number(globalState.sessionFee),
            sessionDate:String(globalState.sessionDate),
            sessionStartTime:String(globalState.sessionStartTime),
            sessionEndTime:String(globalState.sessionEndTime),
            notes:String(globalState.notes)
        }
        // Save session
        await AddSessionInput({variables});
        // hide modal
        setShow(false);
        // Reload sessions   
        ReloadSessions();
      };

    if(error){
       console.log(error);
    };

    const handleShow = () => setShow(true);


  return (
    <div className={`${mode === "Edit" ? 'sessionEdit' : 'AddSession'}`}>
        <Button variant={`${mode === "Edit" ? 'outline-info' : 'primary'}`} onClick={handleShow}>
            <i className='fas fa-plus' /> {mode==='Edit' ? 'Edit' : 'Create a new'} Session
        </Button>

        <Modal show={show} onHide={handleClose} size="md">
            <Modal.Header closeButton>
                <Modal.Title><i className='fas fa-camera' /> {mode==='Edit' ? 'Edit' : 'Create a new'} Session</Modal.Title>
            </Modal.Header>
            <Modal.Body> <AddSessionForm mode="Edit" session={session}/> </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={runAddSessionInput}>
                    {mode==='Edit' ? 'Save' : 'Create'}
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
};


const AddSessionForm = (props) =>{

    const { mode } = props;
    const session = props.session || {};
    const [calendar, handleCalendar] = useState(false);
    const [date, setDate] = useState({
        selectedDate: ''
    });

    const toggle = () => handleCalendar(!calendar);
    
    const [sessionDetails, setSessionDetails] = useState(session);

    useEffect(() => {
        console.log('mounted');
        return () => console.log('unmounting...');
      }, [])  // pass `value` as a dependency

    const handleSessionDetails = (evt) => {
        
        if(evt.target.dataset && evt.target.dataset.parent === "address"){
            sessionDetails.address[evt.target.name] = evt.target.value;
        }
        else if(evt && evt.target && evt.target.name){
            sessionDetails[evt.target.name] = evt.target.value;
        }
        setSessionDetails(sessionDetails);
        globalState = sessionDetails;  
        return;
    };

    const onChangeCalender = (day) => {
        toggle(); // Closes the calender
        setDate({selectedDate: day.toLocaleDateString()})
        handleSessionDetails({
            target:{
                name:"sessionDate",
                value:Moment(day)
            }
        });
    }

    const handleSesionStartTime = (value) => {
        handleSessionDetails({
            target:{
                name:"sessionStartTime",
                value:value
            }
        });
    };

    const handleSessionEndTime= (value) =>{
        handleSessionDetails({
            target:{
                name:"sessionEndTime",
                value:value
            }
        });
    }

    return(
        <div>
            <p><strong>Title your new Single Session</strong></p>
            <FormControl name="title" value={sessionDetails.title}
            placeholder="E.g 'Kids Birthday Shoot' " onChange={handleSessionDetails}/>
            <br/>

           

            <p><strong>Add a short description of the session</strong></p>
            <FormControl as="textarea" name="description"
            placeholder="E.g Jenny's birthday shoot in Blacktown" value={sessionDetails.description} onChange={handleSessionDetails}/>
            <br/>
            
            <p><strong>Session Date</strong></p>
            <InputGroup size="sm">
                <FormControl id="CalendarValue" name="sessionDate" placeholder="Click to launch calendar" onChange={handleSessionDetails} readOnly onClick={toggle} value={sessionDetails.sessionDate ? Moment(sessionDetails.sessionDate).format('Do MMMM YYYY') : date.selectedDate }/>
                <InputGroup.Text onClick={toggle}>
                    <i className="far fa-calendar-alt" />
                </InputGroup.Text>
            </InputGroup>
            {calendar && (<DayPicker hide showOutsideDays todayButton="Today" onDayClick={onChangeCalender} />)}
            <br/>

            <p><strong>Session Time</strong></p>
            <InputGroup size="sm">
                <InputGroup.Prepend>
                    <InputGroup.Text style={{fontSize:'14px'}}>Start Time: </InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Append><TimePicker id="sessionStartTime" onChange={handleSesionStartTime} inputClassName="TimePicker" use12Hours={true} showSecond={false} /></InputGroup.Append>
                <InputGroup.Prepend>
                    <InputGroup.Text style={{fontSize:'14px'}}>End Time: </InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Append><TimePicker id="sessionEndTime" onChange={handleSessionEndTime} inputClassName="TimePicker" use12Hours={true} showSecond={false} /></InputGroup.Append>
            </InputGroup>
            <br/>

            <p><strong>Session Fee</strong></p>
            <InputGroup size="sm">
                <InputGroup.Prepend>
                    <InputGroup.Text style={{fontSize:'14px'}}>$ </InputGroup.Text>
                </InputGroup.Prepend>           
                <FormControl name="sessionFee" value={sessionDetails.sessionFee} onChange={handleSessionDetails} />
            </InputGroup>
            <br/>

            <p><strong>Location: </strong></p>
            <InputGroup size="sm">
                <FormControl name="streetNumber" data-parent="address" value={sessionDetails.address.streetNumber} onChange={handleSessionDetails} placeholder="Street No:" />
                <FormControl name="streetName" data-parent="address" value={sessionDetails.address.streetName} onChange={handleSessionDetails} placeholder="Street name" />
            </InputGroup>
            <InputGroup size="sm">
                <FormControl name="suburb" data-parent="address" value={sessionDetails.address.suburb} onChange={handleSessionDetails} placeholder="Suburb" />
                <FormControl name="postcode" data-parent="address" value={sessionDetails.address.postcode} onChange={handleSessionDetails} placeholder="Postcode" />
                <FormControl name="state" data-parent="address" value={sessionDetails.address.state} onChange={handleSessionDetails} placeholder="State" />
            </InputGroup>
            <br/>

            <p><strong>Session Notes: </strong></p>
            <InputGroup size="sm">
                <FormControl name="notes" onChange={handleSessionDetails} value={sessionDetails.notes} as="textarea" placeholder="Enter any notes you would like to add" />
            </InputGroup>

        </div>
    );
}

export default SessionAdd;