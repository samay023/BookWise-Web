import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./HomePage.css";
import { Form, Button } from "react-bootstrap";
import Flexbox from "flexbox-react";
import { login } from "../../../resolvers/authResolver";
import { useLazyQuery } from '@apollo/react-hooks';
import Session from "../Session/Session";
import AuthContext from "../../../context/authContext";

const HomePage = () => {

    const [authContext, setAuthData ] = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    console.log("Is Authenticated from context is " + isAuthenticated);
    const [validated, setValidated] = useState(false);

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

    const handleSubmit = event => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();  
        if (!form.checkValidity()) {
            setValidated(true);
            return;
        }
        else{
            handleAuthenticateUser(formData);
        }
        setValidated(true);      
        return;  
    };

    const handleAuthenticateUser = async (formData) =>{
        await authenticateUser({
            variables:{email:formData.email, password:formData.password}
        });
    };

    const [authenticateUser,{data}] = useLazyQuery(login);

    useEffect(() => {

    if(data && data.login){
            console.log(data);
            console.log(data.login.user.email);
            localStorage.setItem("token", data.login.token);
            setAuthData({
                isAuthenticated: !!localStorage.getItem('token'),
                userID:data.login.id,
                email:data.login.email,
                name:data.login.name
            });
        } 
    },[data,setAuthData]);

    if (isAuthenticated) return <Redirect to="/session" component={Session} />;

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
