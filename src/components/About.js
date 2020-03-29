import React from 'react';

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import '../App.css';
import image from './materials/whocares.gif';
import resume from './materials/melihdogan.pdf'


import Fade from 'react-reveal/Fade';

export default class About extends React.Component {

    handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'melihdogan.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    }
    render() {
        return (
            <>
                <Container fluid className="About">
                    <Container>
                        <Fade top>
                            <Row className="row">
                                <Col className="leftSide" md={6}>
                                    <Image src={image} rounded thumbnail />
                                </Col>
                                <Col className="rightSide" md={6}>
                                    <p>But again, just in case you care, </p>
                                    <p>I'm Melih. 22-year-old MIS student at Bogaziçi University. My path with coding crossed first when I was a freshman at BOUN but I did not delve into it back then. Afterwards, I got the chance to attend Hackaton Programme in Berlin 2018 where I found a chance to get exposure to coding a bit more. I also had the opportunity of getting to know Re:Coded and its people and attended Re:Coded Bootcamp in 2020. I'm currently a full-time 3rd grade student who aspires to be an experienced Front-End Web Developer. If you still care who I am, why not having a coffee together? (of course in Zoom) 🙃</p>
                                    <Button variant="outline-light" onClick={this.handleDownload}><FontAwesomeIcon icon={faArrowDown} /> Download My Resume!</Button>
                                </Col>
                            </Row>
                        </Fade>
                    </Container>
                </Container>
            </>
        );
    }
}