import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Container, Row, Col, Navbar, Nav, NavLink,
    NavbarBrand, Card, ListGroup, Button
} from 'react-bootstrap';

class VarButton extends Component {
    render() {
    const { status, id, history } = this.props;

    return (
        <div>
            {status === "unanswered" ?
            <Button variant="primary" onClick={() => {history.push(`questions/${id}`)}}>Submit answer</Button> :
            <Button variant="primary" onClick={() => {history.push(`questions/${id}`)}}>See Result</Button>}
        </div>


    );
    }

}

export default withRouter(VarButton);
