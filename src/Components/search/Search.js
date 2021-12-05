import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Search extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center searchBack p-0">
                    <Container fluid={true} className="searchOpa">
                        <Row>
                            <Col>
                                <h1 className="searchTitle">Your Health is Our Priority</h1>
                                <h5 className="searchDes">Exercitation voluptate laboris laborum nulla quis dolor Exercitation voluptate laboris</h5>
                                <button className="searchButton">Search Places</button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        );
    }
}

export default Search;