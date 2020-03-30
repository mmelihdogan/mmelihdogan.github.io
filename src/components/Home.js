import React from 'react';
import '../styles/App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

class Home extends React.Component {

    render() {
        return (
            <>
                <Navigation path="/" />
                <Container fluid className="Home">
                    <Container className="melih">
                        <h1>melih ;D</h1>
                        <p>Apprentice Web Developer</p>
                    </Container>
                </Container >
            </>
        )
    }
}

export default Home;
