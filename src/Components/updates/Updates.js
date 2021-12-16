import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import DoctorPic from '../../Asset/images/doctor-pic.jpg';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';

class Updates extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={12} md={12} sm={12} className="text-center">
                            <h1 className="serviceTitle">Get Updates</h1>
                            <h5 className='doctorSub'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</h5>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col lg={4} md={6} sm={12}>
                            <Card className='m-2 updateCard'>
                                <Card.Img variant="top" className="updateImg" src={DoctorPic} />
                                <Card.Body className="justify updateCardBody">
                                        <a className="updateAncor" href="#">JUNE 9, 2019</a>
                                        <a className="updateAncor" href="#">ADMIN</a>
                                        <a className="updateAncor" href="#"><FontAwesomeIcon icon={faCommentAlt} /> 3</a><br/>
                                    <Card.Title className="mt-2">Scary Thing That You Don’t Get Enough Sleep</Card.Title>
                                    <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Card.Text>
                                    <Button variant="primary" className="doctorButton">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className='m-2 updateCard'>
                                <Card.Img variant="top" className="updateImg" src={DoctorPic} />
                                <Card.Body className="justify updateCardBody">
                                    <a className="updateAncor" href="#">JUNE 9, 2019</a>
                                    <a className="updateAncor" href="#">ADMIN</a>
                                    <a className="updateAncor" href="#"><FontAwesomeIcon icon={faCommentAlt} /> 3</a><br/>
                                    <Card.Title className="mt-2">Scary Thing That You Don’t Get Enough Sleep</Card.Title>
                                    <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Card.Text>
                                    <Button variant="primary" className="doctorButton">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className='m-2 updateCard'>
                                <Card.Img variant="top" className="updateImg" src={DoctorPic} />
                                <Card.Body className="justify updateCardBody">
                                    <a className="updateAncor" href="#">JUNE 9, 2019</a>
                                    <a className="updateAncor" href="#">ADMIN</a>
                                    <a className="updateAncor" href="#"><FontAwesomeIcon icon={faCommentAlt} /> 3</a><br/>
                                    <Card.Title className="mt-2">Scary Thing That You Don’t Get Enough Sleep</Card.Title>
                                    <Card.Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Card.Text>
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

export default Updates;