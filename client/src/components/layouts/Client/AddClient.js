import React from "react";
import {FormControl, InputGroup } from "react-bootstrap";

const AddClient = (props) => {
    return (
    <div>
        <p><strong>Client Details</strong></p>
        <InputGroup size="sm">
            <FormControl name="firstName" placeholder="First Name" onChange="" />
            <FormControl name="surname" placeholder="Surname" onChange="" />
        </InputGroup>
        <InputGroup size="sm">
            <FormControl name="email" placeholder="Email" onChange="" />
            <FormControl name="phoneNo" placeholder="Phone Number" onChange="" />
        </InputGroup>
        <br/>

        <p><strong>Address: </strong></p>
        <InputGroup size="sm">
            <FormControl name="streetNumber" data-parent="address" onChange="" placeholder="Street No:" />
            <FormControl name="streetName" data-parent="address" onChange="" placeholder="Street name" />
        </InputGroup>
        <InputGroup size="sm">
            <FormControl name="suburb" data-parent="address" onChange="" placeholder="Suburb" />
            <FormControl name="postcode" data-parent="address" onChange="" placeholder="Postcode" />
            <FormControl name="state" data-parent="address" onChange="" placeholder="State" />
        </InputGroup>
        <br/>

    </div>
    )
}


export default AddClient;