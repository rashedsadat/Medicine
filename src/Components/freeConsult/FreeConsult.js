import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class FreeConsult extends Component {
    constructor(){
        super();
        this.state = {
            city1: "Select Your Services",
            city2: "Noakhali",
            city3: "Cumilla",
            city4: "Feni",
            show: ""
        }
    }
    onChangeHandler = (event) => {
        var seletedValue =  event.target.value;
        this.setState({show : seletedValue});
    }
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="freeConsultContainer">
                    <Container className="text-center">
                        <h1 className="freeConsultHeading">FREE CONSULTATION</h1>
                        <form>
                            <Row>
                                <Col sm={12} lg={6}>
                                    <input className="commonCompoenet" type="text" placeholder="First Name" /><br/>
                                    <input className="commonCompoenet" type="text" placeholder="Last Name" /><br/>
                                    <select className="commonCompoenet" onChange={this.onChangeHandler} value={this.state.show}>
                                        <option>{this.state.city1}</option>
                                        <option>{this.state.city2}</option>
                                        <option>{this.state.city3}</option>
                                        <option>{this.state.city4}</option>
                                    </select><br/>
                                    <input className="commonCompoenet" type="text" placeholder="Phone" />
                                </Col>
                                <Col sm={12} lg={6}>
                                    <input className="commonCompoenet" type="date" /><br/>
                                    <input className="commonCompoenet" type="time" /><br/>
                                    <input className="commonCompoenet" type="text" placeholder="Message" /><br/>
                                    <button className="commonCompoenet freeConsultButton">Appointment</button><br/>
                                </Col>
                            </Row>
                        </form>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default FreeConsult;