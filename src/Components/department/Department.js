import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/fontawesome-free-solid';
import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Department extends Component {
    constructor(){
        super();
        this.state = {
            status: false,
            departmentCom: "departmentComponent",
            departmentIco: "departmentIcon",
            departmentTit: "departmentTitle",
            departmentSub: "departmentSubTitle",
        }
    }
    
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center departmentContainer">
                    <h1 className="freeConsultHeading">DEPARTMENT</h1>
                    <Row>
                        <Col md={12} lg={6}>
                            <Row>
                                <Col className={this.state.departmentCom}
                                    
                                    onMouseEnter={() => this.setState({status:true, departmentCom:"departmentComponentHover", departmentIco:"departmentIconHover", departmentTit:"departmentTitleHover", departmentSub:"departmentSubTitleHover"})}
                                    onMouseLeave={() => this.setState({status:false, departmentCom:"departmentComponent", departmentIco:"departmentIcon", departmentTit:"departmentTitle", departmentSub:"departmentSubTitle"})}
                                >
                                    <FontAwesomeIcon icon={faStethoscope} className={this.state.departmentIco} />
                                    <h1 className={this.state.departmentTit}>Neurology</h1>
                                    <h4 className={this.state.departmentSub}>Aute tempor ad cillum aute amet laboris enim.</h4>
                                </Col>
                                <Col className={this.state.departmentCom}
                                   onMouseEnter={() => this.setState({status:true, departmentCom:"departmentComponentHover", departmentIco:"departmentIconHover", departmentTit:"departmentTitleHover", departmentSub:"departmentSubTitleHover"})}
                                   onMouseLeave={() => this.setState({status:false, departmentCom:"departmentComponent", departmentIco:"departmentIcon", departmentTit:"departmentTitle", departmentSub:"departmentSubTitle"})}
                                >
                                    <FontAwesomeIcon icon={faStethoscope} className={this.state.departmentIco} />
                                    <h1 className={this.state.departmentTit}>Opthalmology</h1>
                                    <h4 className={this.state.departmentSub}>Occaecat qui non id laborum.</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} lg={6}>
                            <Row>
                                <Col className={this.state.departmentCom}
                                    onMouseEnter={() => this.setState({status:true, departmentCom:"departmentComponentHover", departmentIco:"departmentIconHover", departmentTit:"departmentTitleHover", departmentSub:"departmentSubTitleHover"})}
                                    onMouseLeave={() => this.setState({status:false, departmentCom:"departmentComponent", departmentIco:"departmentIcon", departmentTit:"departmentTitle", departmentSub:"departmentSubTitle"})}
                                >
                                    <FontAwesomeIcon icon={faStethoscope} className={this.state.departmentIco} />
                                    <h1 className={this.state.departmentTit}>Nuclear Magnetic</h1>
                                    <h4 className={this.state.departmentSub}>Anim esse ut tempor velid qui et minim.</h4>
                                </Col>
                                <Col className={this.state.departmentCom}
                                    onMouseEnter={() => this.setState({status:true, departmentCom:"departmentComponentHover", departmentIco:"departmentIconHover", departmentTit:"departmentTitleHover", departmentSub:"departmentSubTitleHover"})}
                                    onMouseLeave={() => this.setState({status:false, departmentCom:"departmentComponent", departmentIco:"departmentIcon", departmentTit:"departmentTitle", departmentSub:"departmentSubTitle"})}
                                >
                                    <FontAwesomeIcon icon={faStethoscope} className={this.state.departmentIco} />
                                    <h1 className={this.state.departmentTit}>Surgical</h1>
                                    <h4 className={this.state.departmentSub}>Aliquip fugiat excepteur nisi velit dolore occ</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} lg={6}>
                            <Row>
                                <Col className="departmentComponentLine" className={this.state.departmentCom}
                                    onMouseEnter={() => this.setState({status:true, departmentCom:"departmentComponentHover", departmentIco:"departmentIconHover", departmentTit:"departmentTitleHover", departmentSub:"departmentSubTitleHover"})}
                                    onMouseLeave={() => this.setState({status:false, departmentCom:"departmentComponent", departmentIco:"departmentIcon", departmentTit:"departmentTitle", departmentSub:"departmentSubTitle"})}
                                >
                                    <FontAwesomeIcon icon={faStethoscope} className={this.state.departmentIco} />
                                    <h1 className={this.state.departmentTit}>Cardiology</h1>
                                    <h4 className={this.state.departmentSub}>Aute ut Lorem duis est labore.</h4>
                                </Col>
                                <Col className="departmentComponentLine" className={this.state.departmentCom}
                                    onMouseEnter={() => this.setState({status:true, departmentCom:"departmentComponentHover", departmentIco:"departmentIconHover", departmentTit:"departmentTitleHover", departmentSub:"departmentSubTitleHover"})}
                                    onMouseLeave={() => this.setState({status:false, departmentCom:"departmentComponent", departmentIco:"departmentIcon", departmentTit:"departmentTitle", departmentSub:"departmentSubTitle"})}
                                >
                                    <FontAwesomeIcon icon={faStethoscope} className={this.state.departmentIco} />
                                    <h1 className={this.state.departmentTit}>X-ray</h1>
                                    <h4 className={this.state.departmentSub}>Esse tempor tempor Lorem incididunt sint.</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12} lg={6}>
                            <Row>
                                <Col className="departmentComponentLine" className={this.state.departmentCom}
                                    onMouseEnter={() => this.setState({status:true, departmentCom:"departmentComponentHover", departmentIco:"departmentIconHover", departmentTit:"departmentTitleHover", departmentSub:"departmentSubTitleHover"})}
                                    onMouseLeave={() => this.setState({status:false, departmentCom:"departmentComponent", departmentIco:"departmentIcon", departmentTit:"departmentTitle", departmentSub:"departmentSubTitle"})}
                                >
                                    <FontAwesomeIcon icon={faStethoscope} className={this.state.departmentIco} />
                                    <h1 className={this.state.departmentTit}>Dental</h1>
                                    <h4 className={this.state.departmentSub}>Eiusmod adipisicing laborum aliquip ad.</h4>
                                </Col>
                                <Col className="departmentComponentLine" className={this.state.departmentCom}
                                    onMouseEnter={() => this.setState({status:true, departmentCom:"departmentComponentHover", departmentIco:"departmentIconHover", departmentTit:"departmentTitleHover", departmentSub:"departmentSubTitleHover"})}
                                    onMouseLeave={() => this.setState({status:false, departmentCom:"departmentComponent", departmentIco:"departmentIcon", departmentTit:"departmentTitle", departmentSub:"departmentSubTitle"})}
                                >
                                    <FontAwesomeIcon icon={faStethoscope} className={this.state.departmentIco} />
                                    <h1 className={this.state.departmentTit}>Traumatology</h1>
                                    <h4 className={this.state.departmentSub}>Est ex quisco deserunt adipisicing amet nisi.</h4>
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