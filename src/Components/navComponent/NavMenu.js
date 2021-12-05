import React, { Component } from 'react';
import '../../Asset/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import navbarIcon from '../../Asset/images/navIcon.png';

class NavMenu extends Component {
    constructor(){
        super();
        this.state = {
            navbarBack: "navBackground",
            navbarTitle: "navTitle",
            nabbarMenu: "navMenu"
        }
    }

    onScroll = () => {
        if(window.scrollY > 100){
            this.setState({navbarBack: "navBackgroundScroll", navbarTitle: "navTitleScroll", nabbarMenu: "navMenuScroll"})
        }
        else if(window.scrollY < 100){
            this.setState({navbarBack: "navBackground", navbarTitle: "navTitle", nabbarMenu: "navMenu"})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <div>
                <Navbar fixed="top" className={this.state.navbarBack} collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand className={this.state.navbarTitle}><img src={navbarIcon} className="navImg"/> HelthCare</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                
                            </Nav>
                            <Nav>
                                <Nav.Link className={this.state.nabbarMenu} href="#deets">Home</Nav.Link>
                                <Nav.Link className={this.state.nabbarMenu} href="#deets">About</Nav.Link>
                                <Nav.Link className={this.state.nabbarMenu} href="#deets">Department</Nav.Link>
                                <Nav.Link className={this.state.nabbarMenu} href="#deets">Doctor</Nav.Link>
                                <Nav.Link className={this.state.nabbarMenu} href="#deets">Blog</Nav.Link>
                                <Nav.Link className={this.state.nabbarMenu} href="#deets">Contact</Nav.Link>
                                <Nav.Link className={this.state.nabbarMenu} href="#deets"><button className="navButton">Appoinment</button></Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavMenu;