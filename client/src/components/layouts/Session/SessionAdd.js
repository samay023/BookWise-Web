import React, {useState} from "react";
import { Button, Modal, FormControl, InputGroup} from "react-bootstrap";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

const SessionAdd = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div className="AddSession">
        <Button variant="primary" onClick={handleShow}>
            <i className='fas fa-plus' /> Create a new Session
        </Button>

        <Modal show={show} onHide={handleClose} size="md">
            <Modal.Header closeButton>
                <Modal.Title><i className='fas fa-camera' /> Create a new session</Modal.Title>
            </Modal.Header>
            <Modal.Body> {AddSessionForm()} </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Create
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
};


const AddSessionForm = () =>{

    const [calendar, handleCalendar] = useState(false);
    const [date, setDate] = useState({
        selectedDate: ''
    });

    const toggle = () => handleCalendar(!calendar);
    const onChangeCalender = (day) => {
        toggle(); // Closes the calender
        setDate({selectedDate: day.toLocaleDateString()})
    }
    return(
        <div>
            <p><strong>Title your new Single Session</strong></p>
            <FormControl aria-label="Title" aria-describedby="basic-addon2" 
            placeholder="This title will be visible to your client during booking."/>
            <br/><br/>
            <p><strong>Session Date</strong></p>
            <InputGroup size="sm">
                <FormControl id="CalendarValue" placeholder="Click to launch calendar" readOnly onClick={toggle} value={date.selectedDate} />
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
                <InputGroup.Append><TimePicker inputClassName="TimePicker" use12Hours={true} showSecond={false} /></InputGroup.Append>
                <InputGroup.Prepend>
                    <InputGroup.Text style={{fontSize:'14px'}}>End Time: </InputGroup.Text>
                </InputGroup.Prepend>
                <InputGroup.Append><TimePicker inputClassName="TimePicker" use12Hours={true} showSecond={false} /></InputGroup.Append>
            </InputGroup>
            <br/>
            <p><strong>Session Fee</strong></p>
            <InputGroup size="sm">
                <InputGroup.Prepend>
                    <InputGroup.Text style={{fontSize:'14px'}}>$ </InputGroup.Text>
                </InputGroup.Prepend>           
                <FormControl aria-label="Amount (to the nearest dollar)" />
            </InputGroup>
            <br/><br/>
            <p><strong>Location: </strong></p>
            <InputGroup size="sm">
                <FormControl placeholder="Street No:" />
                <FormControl placeholder="Street name" />
            </InputGroup>
            <InputGroup size="sm">
                <FormControl placeholder="Suburb" />
                <FormControl placeholder="Postcode" />
                <FormControl placeholder="State" />
            </InputGroup>
            <br/><br/>
            <p><strong>Session Notes: </strong></p>
            <InputGroup size="sm">
                <FormControl as="textarea" placeholder="Enter any notes you would like to add" />
            </InputGroup>
        </div>
    );
}

export default SessionAdd;