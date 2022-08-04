import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { userLogout } from '../actions/users';
import Figure from 'react-bootstrap/Figure';

class Navigation extends Component {


    render() {
        const { dispatch, handleUserLogout, users } = this.props;
        const { currentUser } = users;

        return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">New Question</Nav.Link>
                    <Nav.Link href="#link">Leader Board</Nav.Link>
                    <Nav.Link >New Question</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">
                        <div className="current-user">
                            <Figure>
                                <Figure.Image
                                    width={50}
                                    height={50}
                                    alt="50x50"
                                    src={currentUser.avatarURL}
                                />
                            </Figure>
                            <span className="name">{currentUser.name}</span>
                        </div> Home
                    </Nav.Link>
                    <Nav.Link href="#link"
                        onClick={()=> { dispatch(handleUserLogout()) }}
                        >
                        Logout
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}

export default Navigation;
