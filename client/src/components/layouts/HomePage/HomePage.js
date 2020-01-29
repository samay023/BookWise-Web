import React, { Fragment, useState } from "react";
import "./HomePage.css";
import { Form, Button } from "react-bootstrap";
import Flexbox from "flexbox-react";
const HomePage = () => {

    const isAuthenticated = false;

    const [validated, setValidated] = useState(false);
    const handleSubmit = event => {

        event.preventDefault();
        event.stopPropagation();
        
        setValidated(true);
        console.log(formData);
    };

    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    const handleFormData = (evt) => {
        if(evt && evt.target && evt.target.name){
            formData[evt.target.name] = evt.target.value;
        }
        setFormData(formData);
        return;
    };
    // Add logic here
    // Call graphql api on submit
    // If valid response store token in httplocal
    // else keep
    // If Authenticated -> Redirect user to session page.
    // Display sign up page when signup is clicked
  return (
          <Flexbox className="homepageBody" alignItems="center" display="flex" flexDirection="row">
                <div className="background hide-sm"/>
                <div className="loginContainer">
                    <div className="logo"/>
                    <div className="loginForm">
                        <h2 style={{textAlign:"center", paddingBottom:"20px"}}>Welcome to BookWise!</h2>
                        <h4 style={{textAlign:"center"}}>Login to continue</h4>
                        <br/>
                        <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="validationEmail">
                                <Form.Control name="email" onChange={handleFormData} required type="Email" placeholder="Email:"/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email address
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="validationPassword">
                                <Form.Control name="password" onChange={handleFormData} required type="password" placeholder="Password:"/>
                                <Form.Control.Feedback type="invalid">
                                    Please enter your password
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Check type="checkbox" label="Remember Me" />
                            </Form.Group>
                            <Button className="loginButton" type="submit">
                                Log In
                            </Button>
                            <Form.Group>
                                <Form.Text style={{textAlign:"center"}} className="text-muted">
                                    Or Sign up
                                </Form.Text>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
          </Flexbox>
  );
};

export default HomePage;
