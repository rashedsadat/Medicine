import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import arrow from '../../Asset/images/arrow.png';
import aboutUp from '../../Asset/images/about1.png';
import aboutDown from '../../Asset/images/about2.png';

class About extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="fluidContainer">
                    <Container className="aboutContainer">
                        <Row>
                            <Col sm={12} lg={6}>
                                <img src={aboutUp} className="upImg" />
                                <img src={aboutDown} className="downImg" />
                            </Col>
                            <Col className="justify">
                                <h4 className="aboutWelcome">Welcome to HealthCare</h4>
                                <h1 className="aboutTitle">Best Care For Your</h1>
                                <h1 className="aboutTitle aboutTitle2">Good Health</h1>
                                <p className="aboutPara">
                                    Consectirure sit Consequat qui ea magna esse commodo proident eiusmod pariatur do nulla adipisicing ex. Cupidatat ad labore est ea in et cupidatat irure dolor do tempor ipsum id.
                                </p>
                                <p className ="aboutPoint"><img src={arrow} className="arrowImg" /> Adipisicing nostrud Lorem elitident ea mollit.</p>
                                <p className ="aboutPoint"><img src={arrow} className="arrowImg" /> Dolore dolore quis ut nulla occaecat do.</p>
                                <p className ="aboutPoint"><img src={arrow} className="arrowImg" /> Laboris tempor non nostrud nulla ullamco est amet.</p>
                                <p className ="aboutPoint"><img src={arrow} className="arrowImg" /> Labore officia minim do nulla officia elit.</p>
                                <button className="aboutButton">Learn More</button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default About;