import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Department extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="freeConsultHeading">DEPARTMENT</h1>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            
                            <i class="fas fa-clinic-medical"></i>
                            <FontAwesomeIcon icon={""} />
                            <h1>1</h1>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1>2</h1>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1>3</h1>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1>4</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <h1>5</h1>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1>6</h1>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1>7</h1>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <h1>8</h1>
                        </Col>
                    </Row>
                </Container>
            </Fragment>

        );
    }
}

export default Department;