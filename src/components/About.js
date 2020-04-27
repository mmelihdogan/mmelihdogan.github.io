import React from 'react';

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import '../styles/App.css';
import image from './materials/whocares.gif';
import resume from './materials/melihdogan.pdf'

import Navigation from './Navigation';
import Fade from 'react-reveal/Fade';

import { useTranslation } from 'react-i18next';


function About() {

    const { t } = useTranslation();

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
                                <p>{t('about.title')}</p>
                                <p>{t('about.details')}</p>
                                <Button variant="outline-light" onClick={handleDownload}><FontAwesomeIcon icon={faArrowDown} /> {t('about.download')}</Button>
                            </Col>
                        </Row>
                    </Fade>
                </Container>
            </Container>
        </>
    );
}

export default About;