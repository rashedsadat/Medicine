import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import DoctorPic from '../../Asset/images/doctor-pic.jpg';
import { faTwitter, faFacebook, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Doctor extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5 mb-5">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <h1 className="serviceTitle">Qualified Doctors</h1>
                            <h5 className='doctorSub'>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</h5>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={3} md={6} sm={12}>
                            <Card className='m-3'>
                                <Card.Img variant="top" className="doctorImg" src={DoctorPic} />
                                <Card.Body className="text-center">
                                        <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                        <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                        <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faGooglePlus} /></a>
                                        <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faInstagram} /></a><br/>
                                    <Card.Title className="mt-2">Dr. Lloyd Wilson</Card.Title>
                                    <Card.Text>NEUROLOGIST</Card.Text>
                                    <Card.Text>I am an ambitious workaholic, but apart from that, pretty simple person.</Card.Text>
                                    <Button variant="primary" className="doctorButton">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Card className='m-3'>
                                <Card.Img variant="top" className="doctorImg" src={DoctorPic} />
                                <Card.Body className="text-center">
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faGooglePlus} /></a>
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faInstagram} /></a><br/>
                                    <Card.Title className="mt-2">Dr. Lloyd Wilson</Card.Title>
                                    <Card.Text>NEUROLOGIST</Card.Text>
                                    <Card.Text>I am an ambitious workaholic, but apart from that, pretty simple person.</Card.Text>
                                    <Button variant="primary" className="doctorButton">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Card className='m-3'>
                                <Card.Img variant="top" className="doctorImg" src={DoctorPic} />
                                <Card.Body className="text-center">
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faGooglePlus} /></a>
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faInstagram} /></a><br/>
                                    <Card.Title className="mt-2">Dr. Lloyd Wilson</Card.Title>
                                    <Card.Text>NEUROLOGIST</Card.Text>
                                    <Card.Text>I am an ambitious workaholic, but apart from that, pretty simple person.</Card.Text>
                                    <Button variant="primary" className="doctorButton">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <Card className='m-3'>
                                <Card.Img variant="top" className="doctorImg" src={DoctorPic} />
                                <Card.Body className="text-center">
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faGooglePlus} /></a>
                                    <a className="doctorAncor" href="#"><FontAwesomeIcon icon={faInstagram} /></a><br/>
                                    <Card.Title className="mt-2">Dr. Lloyd Wilson</Card.Title>
                                    <Card.Text>NEUROLOGIST</Card.Text>
                                    <Card.Text>SomeI am an ambitious workaholic, but apart from that, pretty simple person.</Card.Text>
                                    <Button variant="primary" className="doctorButton">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Doctor;