import React from 'react';
import './Contact.css';
import { Button, Container, Alert, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Fade from 'react-reveal/Fade';


class Contact extends React.Component  {

  state = {
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null,
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    })
}

  handleSubmit = (event) => {
    const alertMessage = (
      <Alert key="success" variant="success">
            This is a success alert—check it out!
      </Alert>
    );

    event.preventDefault();

    return alertMessage;
      
  }

  render()    {    
    
    let formDetails = null;

    if (this.state.name !== "") {
      formDetails = (
        <Fade top>
        <p>Nice to meet you! 👋</p>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group>
            <Form.Label htmlFor="email">What's your email?</Form.Label>
            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
            <Form.Label htmlFor="message">Your message:</Form.Label>
            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
        </Form.Group>
      <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>Send</Button>
      {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
      {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
        </Form>
        </Fade>                 
         )
    }
    
    return (

      <>
        <Container fluid className="Contact">
                   <h1 className="melih py-5">Hello {this.state.name === "" ? '👋' : this.state.name + "!" }</h1>
                    <Form>
                        <Form.Group onSubmit={this.handleNameSubmit}>
                            <Form.Label>What's your name?</Form.Label>
                            <Form.Control id="name" name="name"
                            type="text" 
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            />
                        </Form.Group>
                    </Form>   
                    {formDetails}
        </Container >
      </>
    )
}}

export default Contact;