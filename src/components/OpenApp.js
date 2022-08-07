import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Details from './Details'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import { Container } from 'react-bootstrap'

class OpenApp extends Component {
  render() {
    return (
      <Container>
        {
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/questions/:id" component={Details} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leaderboard" component={Leaderboard} />
          </Switch>
        }
      </Container>
    )
  }
}

export default OpenApp
