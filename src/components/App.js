import { React, Component } from 'react'
import { connect } from 'react-redux'
import OpenApp from './OpenApp'
import { handleInitialData } from '../actions/shared'
import { Route } from 'react-router-dom'
import SignIn from './SignIn'
import Navigation from './Navigation'
import '../App.css'

import { Container } from 'react-bootstrap'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { isSignedIn } = this.props

    return (
      <Container>
        <Navigation />
        {isSignedIn ? <OpenApp /> : <Route path="/" component={SignIn} />}
      </Container>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isSignedIn: authedUser !== null,
  }
}

export default connect(mapStateToProps)(App)
