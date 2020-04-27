import React from 'react';

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import '../styles/App.css';
import image from './materials/whocares.gif';
import resume from './materials/melihdogan.pdf'

import Navigation from './Navigation';
import Fade from 'react-reveal/Fade';

function About() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'melihdogan.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }

        return (
            <>
                <Navigation path="/about" />
                <Container fluid className="About">
                    <Container>
                        <Fade top>
                            <Row className="row">
                                <Col className="leftSide" md={6}>
                                    <Image src={image} rounded thumbnail />
                                </Col>
                                <Col className="rightSide" md={6}>
                                    <p>But again, just in case you care, </p>
                                    <p>I'm Melih. 22-year-old MIS student at Boğaziçi University. My path with coding crossed first when I was a freshman at the university but I did not delve into it back then. Afterwards, I got the chance to attend a hackathon in Berlin at the end of 2018 where I found a chance to get exposure to coding a bit more. I also had the opportunity of getting to know Re:Coded and its people and attended Re:Coded Web Development Bootcamp in 2020. I'm currently a full-time 3rd grade student who aspires to be an experienced Front-End Web Developer. If you still care who I am, why not having a coffee together? (of course in Zoom) 🙃</p>
                                    <Button variant="outline-light" onClick={handleDownload}><FontAwesomeIcon icon={faArrowDown} /> Download My Resume!</Button>
                                </Col>
                            </Row>
                        </Fade>
                    </Container>
                </Container>
            </>
        );
}

export default About;