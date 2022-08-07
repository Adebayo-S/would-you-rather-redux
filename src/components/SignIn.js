import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions/shared'
import { Container, Row } from 'react-bootstrap'

class SignIn extends Component {
  state = { userId: '' }

  handleChange = (e) => {
    const userId = e.target.value
    this.setState({ userId })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { userId } = this.state
    this.props.dispatch(signIn(userId))
  }

  render() {
    const { users } = this.props

    return (
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <div className="login-card-head">
            <h2>Welcome to the Would You Rather App!</h2>
            <h5>Please sign in to continue</h5>
          </div>
          <div className="login-card-body">
            <div className="login-img">
              <img
                src="https://i.gifer.com/GJPo.gif"
                alt="Sign In icon"
                className="login-icon"
              />
              <h2>Sign In</h2>
            </div>
            <form onSubmit={this.handleSubmit}>
              <select onChange={this.handleChange}>
                <option>Select User</option>
                {Object.values(users).map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
              <button className="btn-secondary ms-3 mb-1">Sign In</button>
            </form>
          </div>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(users) {
  return users
}

export default connect(mapStateToProps)(SignIn)
