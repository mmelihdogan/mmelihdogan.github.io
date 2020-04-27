import React from 'react';
import '../styles/App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

import { useTranslation } from 'react-i18next';


function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Navigation path="/" />
            <Container fluid className="Home">
                <Container className="melih">
                    <h1>melih ;D</h1>
                    <p>{t('home.title')}</p>
                </Container>
            </Container >
        </>
    )
}

export default Home;
