import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../Asset/css/bootstrap.min.css';
import emegency from '../../Asset/images/Emergency.png';
import fullHours from '../../Asset/images/24-hours.png';
import outdor from '../../Asset/images/Outdor-Checkup.png';
import doctor from '../../Asset/images/Qualified-Doctor.png';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceTitle">Our Services</h1>
                    <Row>
                        <Col sm={12} md={6} lg={3} className="serviceCol">
                            <img src={emegency}/>
                            <h2>Emergency Services</h2>
                            <p>Lorem ex est nolor irure aduip officia Lorem irure. Non fugiat mollit consequat amet pariatur fugiat voluptate quis amet exercitation magna.</p>
                        </Col>
                        <Col sm={12} md={6} lg={3} className="serviceCol">
                            <img src={fullHours}/>
                            <h2>24 Hours Services</h2>
                            <p>Lorem ex est nolor irure aduip officia Lorem irure. Non fugiat mollit consequat amet pariatur fugiat voluptate quis amet exercitation magna.</p>
                        </Col>
                        <Col sm={12} md={6} lg={3} className="serviceCol">
                            <img src={outdor}/>
                            <h2>Outdoor Checkup</h2>
                            <p>Lorem ex est nolor irure aduip officia Lorem irure. Non fugiat mollit consequat amet pariatur fugiat voluptate quis amet exercitation magna.</p>
                        </Col>
                        <Col sm={12} md={6} lg={3} className="serviceCol">
                            <img src={doctor}/>
                            <h2>Qualified Doctors</h2>
                            <p>Lorem ex est nolor irure aduip officia Lorem irure. Non fugiat mollit consequat amet pariatur fugiat voluptate quis amet exercitation magna.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;