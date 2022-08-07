import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/shared';
import { withRouter } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import AlertDismissible from './AlertDismissible';
import {
    Container, Row, Col, Navbar, Nav, NavLink,
    NavbarBrand, Card, ListGroup, Button, InputGroup
} from 'react-bootstrap';

class NewQuestion extends Component {

    state = {
        error: false
    }

    componentDidUpdate() {
        const { error } = this.state;
        if (error) {
            setTimeout(() => {
                this.setState({ error: false });
            }, 3000);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { authedUser, dispatch, history } = this.props;
        const optionOne = e.target[0].value;
        const optionTwo = e.target[1].value;

        if (optionOne && optionTwo) {
            dispatch(handleSaveQuestion(authedUser, optionOne, optionTwo))
            history.push("/dashboard");
        }
        else {
            this.setState({ error: true });
        }
    }

    render() {

    return (
        <Container>
            {this.state.error && <AlertDismissible />}
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
        </Container>
        );
    }

}

function mapStateToProps({ authedUser }) {
    return { authedUser };
}

export default connect(mapStateToProps)(NewQuestion);
