import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class FreeConsult extends Component {
    constructor(){
        super();
        this.state = {
            selectService: "Select Services",
            item1: "Neurology",
            item2: "Opthalmology",
            item3: "Nuclear Magnetic",
            item4: "Surgical",
            item5: "Cardiology",
            item6: "X-ray",
            item7: "Dental",
            item8: "Traumatology",
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
                                        <option>{this.state.selectService}</option>
                                        <option>{this.state.item1}</option>
                                        <option>{this.state.item2}</option>
                                        <option>{this.state.item3}</option>
                                        <option>{this.state.item4}</option>
                                        <option>{this.state.item5}</option>
                                        <option>{this.state.item6}</option>
                                        <option>{this.state.item7}</option>
                                        <option>{this.state.item8}</option>
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