import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuestionByUser } from '../actions/shared';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {
    Container, Row, Col, Navbar, Nav, NavLink,
    NavbarBrand, Card, ListGroup, Button, InputGroup
} from 'react-bootstrap';

class NewQuestion extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { authedUser, dispatch, history } = this.props;
        history.push("/dashboard");
    }

    render() {

    return (
        <Form onSubmit={this.handleSubmit}>
        <Card style={{ width: '30rem' }}  className="mb-5">
            <Card.Body>
                <Card.Title>Add New Question</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Would you rather...</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Enter the first option"
                        aria-label="Enter the first option"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Option One</InputGroup.Text>
                    </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="Enter the second option"
                        aria-label="Enter the second option"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">Option Two</InputGroup.Text>
                    </InputGroup>
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button type="submit" variant="primary" >Submit Question</Button>
            </Card.Body>
        </Card>
        </Form>
        );
    }

}

function mapStateToProps({ authedUser }) {
    return { authedUser };
}

export default connect(mapStateToProps)(NewQuestion);
