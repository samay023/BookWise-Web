import React, {useState} from "react";
import { Button, Modal, FormControl, InputGroup} from "react-bootstrap";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const AddSession = () => {
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
            <p><strong>Session Date / Time</strong></p>
            <InputGroup size="sm">
                <FormControl id="CalendarValue" placeholder="Click to launch calendar" readOnly onClick={toggle} value={date.selectedDate} />
                <InputGroup.Text onClick={toggle}>
                    <i className="far fa-calendar-alt" />
                </InputGroup.Text>
                
            </InputGroup>
            
            {calendar && (<DayPicker showOutsideDays todayButton="Today" onDayClick={onChangeCalender} />)}
        </div>
    );
}

export default AddSession;