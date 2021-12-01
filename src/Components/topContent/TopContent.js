import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import '../../Asset/css/bootstrap.min.css';
import '../../Asset/css/custom.css';


class TopContent extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid = {true} className = "backImg p-0">
                    <div className = "backOpa">
                        <Container className = "topBanner">
                            <Row>
                                <Col className = "text-center topBannerCol">
                                    <h1 className = "topBannerH1">Health Care</h1>
                                    <h2 className = "topBannerH2">For Whole Family</h2>
                                    <Button className = "btn topButton">Contact Us</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopContent;