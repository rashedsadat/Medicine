import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

class Analysis extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid = {true} className = "analysisImg p-0">
                    <div className = "analysisOpa p-0">
                        <Container className="analysisContent text-center">
                            <Row>
                                <Col lg={6} md={6} sm={12} className="analysisLeftContent justify">
                                    <h6 className="analysisSubHead">FUN FACTS</h6>
                                    <h1 className="analysisHeading">Over 5,100 patients<br/>trust us</h1>
                                    <Button className="analysisButton">Make an Appionment</Button>
                                </Col>
                                <Col lg={6} md={6} sm={12} className="analysisRightContent">
                                    <Row>
                                        <Col lg={6} md={6} sm={12}>
                                            <h1 className="analysisCount">
                                                <CountUp start={0} end={30} duration={0.7}>
                                                    {({ countUpRef, start }) => (
                                                        <ReactVisibilitySensor onChange={start}>
                                                            <span ref={countUpRef} />
                                                        </ReactVisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h5 className="analysisCountHead">Years of Experienced</h5>
                                        </Col>
                                        <Col lg={6} md={6} sm={12} className="analysisMidLine">
                                            <h1 className="analysisCount">
                                                <CountUp start={0} end={4500} duration={0.5}>
                                                    {({ countUpRef, start }) => (
                                                        <ReactVisibilitySensor onChange={start}>
                                                            <span ref={countUpRef} />
                                                        </ReactVisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h5 className="analysisCountHead">Happy Patients</h5>
                                        </Col>
                                    </Row>
                                    {/* <hr/> */}
                                    <Row>
                                        <Col lg={6} md={6} sm={12}>
                                            <h1 className="analysisCount">
                                                <CountUp start={0} end={84} duration={0.7}>
                                                    {({ countUpRef, start }) => (
                                                        <ReactVisibilitySensor onChange={start}>
                                                            <span ref={countUpRef} />
                                                        </ReactVisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h5 className="analysisCountHead">Number of Doctors</h5>
                                        </Col>
                                        <Col lg={6} md={6} sm={12}>
                                            <h1 className="analysisCount">
                                                <CountUp start={0} end={300} duration={0.7}>
                                                    {({ countUpRef, start }) => (
                                                        <ReactVisibilitySensor onChange={start}>
                                                            <span ref={countUpRef} />
                                                        </ReactVisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h5 className="analysisCountHead">Number of Staffs</h5>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;