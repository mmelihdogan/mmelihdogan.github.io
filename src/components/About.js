import React from 'react';

import { Container, Col, Row, Image } from 'react-bootstrap';
import './About.css';
import Navigation from './Navigation';
import image from './891.jpg';


import Fade from 'react-reveal/Fade';

export default class About extends React.Component {
    render() {
      return (
          <>
            <Container fluid className="About">
                <Fade top>
                        <Row className="row">
                            <Col className="leftSide" md={4}>
                                <Image src={image} rounded thumbnail  />
                            </Col>
                            <Col>
                                <h1>Who am I?</h1>
                                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                            </Col>
                        </Row>
                </Fade>
            </Container>
        </>
        );
    }
  }