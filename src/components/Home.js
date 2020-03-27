import React from 'react';
import '../App.css';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

class Home extends React.Component  {

    render()
    {    return (
        <>
        <Container fluid className="Home">
            <h1 className="melih">melih ;D</h1>
            <p>Apprentice Web Developer</p>
            <Button variant="light" size="xl" className="text-uppercase js-scroll-trigger" href="/about">Tell Me More</Button>
        </Container >
        </>
    )
}}

export default Home;
