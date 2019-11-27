import React, {useState} from "react";
import { Table, InputGroup, FormControl, Modal, Button } from "react-bootstrap";
import "./ClientStyle.css";

const EditClientForm = (clientData) => {
  return(
      <div style={{fontSize:'14px'}}>
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text><strong>First Name</strong></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl defaultValue={clientData.FirstName} aria-label="First Name" />
          </InputGroup>
          <br/>
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text><strong>Surname</strong></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl defaultValue={clientData.Surname} />
          </InputGroup>
          <br/>
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text><strong>Email</strong></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl defaultValue={clientData.Email} />
          </InputGroup>
          <br/>
          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text ><strong>Phone Number</strong></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl defaultValue={clientData.PhoneNumber} />
          </InputGroup>
          <br/>
          <p><strong>Address: </strong></p>
          <InputGroup size="sm">
              <FormControl defaultValue={clientData.Address.StreetNo} placeholder="Street No:" />
              <FormControl defaultValue={clientData.Address.StreetName} placeholder="Street name" />
          </InputGroup>
          <InputGroup size="sm">
              <FormControl defaultValue={clientData.Address.Suburb} placeholder="Suburb" />
              <FormControl defaultValue={clientData.Address.Postcode} placeholder="Postcode" />
              <FormControl defaultValue={clientData.Address.State} placeholder="State" />
          </InputGroup>        
      </div>
  );
}

const Client = () => {
  const [editClient, setEditClient] = useState(false);
  const handleClose = () => setEditClient(false);

  const [clientData, setClientData] = useState({
    FirstName: "",
    Surname:"",
    Email:"",
    PhoneNumber:"",
    Address:{
      StreetNo:"",
      StreetName:"",
      Suburb:"",
      Postcode:"",
      State: ""
    }
  })

  const handleOpen = (args) => {
    setClientData(args);
    setEditClient(true);
}


  const initialData = [{
    FirstName: "Mark",
    Surname:"Otto",
    Email:"MarkOtto@gmail.com",
    PhoneNumber:"0433889290",
    Address:{
      StreetNo:"12",
      StreetName:"Maxim Street",
      Suburb:"West Ryde",
      Postcode:"2000",
      State: "NSW"
      }
    },
    {
    FirstName: "John",
    Surname:"Doe",
    Email:"JohnDoe@gmail.com",
    PhoneNumber:"0433841290",
    Address:{
      StreetNo:"20",
      StreetName:"Miriam Street",
      Suburb:"Auburn",
      Postcode:"2000",
      State: "NSW"
    }
    },
    {
      FirstName: "Sam",
      Surname:"Smith",
      Email:"Samsmith@gmail.com",
      PhoneNumber:"0433812290",
      Address:{
        StreetNo:"1",
        StreetName:"Miriam Street",
        Suburb:"Auburn",
        Postcode:"2000",
        State: "NSW"
      },
    },
    {
    FirstName: "Alan",
    Surname:"Samuel",
    Email:"alansamuel@gmail.com",
    PhoneNumber:"0433841290",
    Address:{
      StreetNo:"5",
      StreetName:"Miriam Street",
      Suburb:"Auburn",
      Postcode:"2000",
      State: "NSW"
    }
  }
  ];

  const clientModal = () => {
    return (<div className="EditClient">
              <Modal show={editClient} onHide={handleClose} size="md">
                  <Modal.Header closeButton>
                      <Modal.Title><i className='fas fa-address-book' /> Client Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body> {EditClientForm(clientData)} </Modal.Body>  
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                          Cancel
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                          Save Changes
                      </Button>
                  </Modal.Footer>
              </Modal>
            </div>
          );
  };

  return (
    <div className='Clients'>
      <h3>List of all Clients</h3>
      <br/>
      <div className="ClientList"> 
        <Table responsive hover borderless>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
          {initialData.map((clientdata,index) => (
            <tr key={index+1} onClick={() => handleOpen(clientdata)}>
              <td>{index+1}</td>
              <td>{clientdata.FirstName}</td>
              <td>{clientdata.Surname}</td>
              <td>{clientdata.Email}</td>
              <td>{clientdata.PhoneNumber}</td>
              <td>{Object.values(clientdata.Address).join(", ")}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
      {clientModal()}   
    </div>
  );
};

export default Client;
