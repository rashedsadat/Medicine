import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/fontawesome-free-solid';
import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Department extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center departmentContainer">
                    <h1 className="freeConsultHeading">DEPARTMENT</h1>
                    <Row>
                        <Col md={12} lg={6}>
                            <Row>
                                <Col className="departmentComponent">
                                    <FontAwesomeIcon icon={faStethoscope} className="departmentIcon" />
                                    <h1 className="departmentTitle">Neurology</h1>
                                    <h4 className="departmentSubTitle">Aute tempor ad cillum aute amet laboris enim.</h4>
                                </Col>
                                <Col className="departmentComponent">
                                    <FontAwesomeIcon icon={faStethoscope} className="departmentIcon" />
                                    <h1 className="departmentTitle">Opthalmology</h1>
                                    <h4 className="departmentSubTitle">Occaecat qui non id laborum.</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} lg={6}>
                            <Row>
                                <Col className="departmentComponent">
                                    <FontAwesomeIcon icon={faStethoscope} className="departmentIcon" />
                                    <h1 className="departmentTitle">Nuclear Magnetic</h1>
                                    <h4 className="departmentSubTitle">Anim esse ut tempor velid qui et minim.</h4>
                                </Col>
                                <Col className="departmentComponent">
                                    <FontAwesomeIcon icon={faStethoscope} className="departmentIcon" />
                                    <h1 className="departmentTitle">Surgical</h1>
                                    <h4 className="departmentSubTitle">Aliquip fugiat excepteur nisi velit dolore occ</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} lg={6}>
                            <Row>
                                <Col className="departmentComponent departmentComponentLine">
                                    <FontAwesomeIcon icon={faStethoscope} className="departmentIcon" />
                                    <h1 className="departmentTitle">Cardiology</h1>
                                    <h4 className="departmentSubTitle">Aute ut Lorem duis est labore.</h4>
                                </Col>
                                <Col className="departmentComponent departmentComponentLine">
                                    <FontAwesomeIcon icon={faStethoscope} className="departmentIcon" />
                                    <h1 className="departmentTitle">X-ray</h1>
                                    <h4 className="departmentSubTitle">Esse tempor tempor Lorem incididunt sint.</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} lg={6}>
                            <Row>
                                <Col className="departmentComponent departmentComponentLine">
                                    <FontAwesomeIcon icon={faStethoscope} className="departmentIcon" />
                                    <h1 className="departmentTitle">Dental</h1>
                                    <h4 className="departmentSubTitle">Eiusmod adipisicing laborum aliquip ad.</h4>
                                </Col>
                                <Col className="departmentComponent departmentComponentLine">
                                    <FontAwesomeIcon icon={faStethoscope} className="departmentIcon" />
                                    <h1 className="departmentTitle">Traumatology</h1>
                                    <h4 className="departmentSubTitle">Est ex quisco deserunt adipisicing amet nisi.</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>

        );
    }
}

export default Department;