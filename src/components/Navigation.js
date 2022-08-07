import React, { Component } from 'react';
import logo from './logo.svg';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { userLogout } from '../actions/users';
import Figure from 'react-bootstrap/Figure';
import { NavLink, withRouter } from "react-router-dom";

class Navigation extends Component {


    render() {
        const { handleUserLogout, users } = this.props;
        // const { currentUser } = users;

        return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="app logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/dashboard">Home</NavLink>
                    <NavLink className="nav-link" to="/new">New Question</NavLink>
                    <NavLink className="nav-link" to="/leaderboard">Leader Board</NavLink>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">
                        <div className="current-user">
                            <Figure>
                                <Figure.Image
                                    width={50}
                                    height={50}
                                    alt="50x50"
                                    src="/icons8.png"
                                />
                            </Figure>
                            {/* <span className="name">{currentUser.name}</span> */}
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#link"
                        onClick={()=> { handleUserLogout() }}
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
