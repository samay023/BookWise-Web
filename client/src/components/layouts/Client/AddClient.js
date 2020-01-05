import React,{useState} from "react";
import {FormControl, InputGroup } from "react-bootstrap";

const AddClient = (props) => {

    // This function will be passed down as a prop so the parent state will be used here
    const { updateClient } = props;
    
    return (
    <div>
        <p><strong>Client Details</strong></p>
        <InputGroup size="sm">
            <FormControl name="firstname" placeholder="First Name" onChange={updateClient} />
            <FormControl name="surname" placeholder="Surname" onChange={updateClient} />
        </InputGroup>
        <InputGroup size="sm">
            <FormControl name="email" placeholder="Email" onChange={updateClient} />
            <FormControl name="mobilePhone" placeholder="Phone Number" onChange={updateClient} />
        </InputGroup>
        <br/>

        <p><strong>Address: </strong></p>
        <InputGroup size="sm">
            <FormControl name="streetNumber" data-parent="address" onChange={updateClient} placeholder="Street No:" />
            <FormControl name="streetName" data-parent="address" onChange={updateClient} placeholder="Street name" />
        </InputGroup>
        <InputGroup size="sm">
            <FormControl name="suburb" data-parent="address" onChange={updateClient} placeholder="Suburb" />
            <FormControl name="postcode" data-parent="address" onChange={updateClient} placeholder="Postcode" />
            <FormControl name="state" data-parent="address" onChange={updateClient} placeholder="State" />
        </InputGroup>
        <br/>

    </div>
    )
}


export default AddClient;