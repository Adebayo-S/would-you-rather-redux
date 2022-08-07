import React, { Component } from 'react'
import logo from './logo.svg'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { connect } from 'react-redux'
import { signOut } from '../actions/shared'
import Figure from 'react-bootstrap/Figure'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  handleLogout = (e) => {
    e.preventDefault()
    this.props.dispatch(signOut())
    this.props.history.push('/')
  }

  render() {
    const { users, authedUser } = this.props
    const user = users[authedUser]

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
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/add">
                New Question
              </NavLink>
              <NavLink className="nav-link" to="/leaderboard">
                Leader Board
              </NavLink>
            </Nav>
            <Nav className="ms-auto">
              <NavLink className="nav-link mt-md-3 me-3" to="/dashboard">
                <div className="current-user">
                  {user && (
                    <Figure>
                      <Figure.Image
                        className="rounded-circle"
                        width={30}
                        height={30}
                        src={user.avatarURL}
                      />
                    </Figure>
                  )}
                  <span className="name ps-2">
                    {!user ? 'Anonymous' : user.name}
                  </span>
                </div>
              </NavLink>
              <Nav.Link className="mt-md-3 pt-hack" onClick={this.handleLogout}>
                {!user ? <span></span> : <span>Logout</span>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questions,
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Navigation)
