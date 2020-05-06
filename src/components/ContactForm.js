import React, { Component } from 'react'
import { Col, Button, Container, Toast, Form } from 'react-bootstrap';
import Navigation from './Navigation';
import emailjs from 'emailjs-com';

import Notify from './Notify';

export default class ContactForm extends Component {

    state = {
        hello: "Hello 👋",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        status: ""
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        let templateParams = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            message: this.state.message,
        }

        const templateId = "template_q0lV1NDy";
        const userId = "user_SMx3f0wRy3TTOmKOsha0B";

        emailjs.send('default_service', templateId, templateParams, userId)
            .then(function (response) {
                alert("Message Sent.");
            }, function (error) {
                alert("Message failed to send.");
            });
        
            this.resetForm();
    };

    resetForm = () => {

        this.setState({
            hello: "Hello 👋",
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            status: true
        })
    }


    render() {

        return (
            <>
                <Navigation path="/contact" />
                <Container fluid className="Contact">
                    {this.state.status === true ? <Notify status="true" /> : <></>}
                    <h1 className="hello">{this.state.firstName === '' ? this.state.hello : 'Hello ' + this.state.firstName + "!"}</h1>
                    <Form onSubmit={event => this.handleSubmit(event)}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    onChange={event => this.handleFirstNameChange(event)}
                                    value={this.state.firstName}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    onChange={event => this.handleLastNameChange(event)}
                                    value={this.state.lastName} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                onChange={event => this.handleEmailChange(event)}
                                value={this.state.email}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows="3"
                                type="text"
                                name="message"
                                placeholder="Your message"
                                onChange={event => this.handleMessageChange(event)}
                                value={this.state.message}
                                required
                            />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Container >
            </>
        )
    }
}
