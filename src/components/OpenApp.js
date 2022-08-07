import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Details from './Details'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import ErrorPage from './ErrorPage'
import { Container } from 'react-bootstrap'

class OpenApp extends Component {
  render() {
    return (
      <Container>
        {
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/questions/:id" component={Details} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="*"><ErrorPage /></Route>
            <Route component={ErrorPage} />
          </Switch>
        }
      </Container>
    )
  }
}

export default OpenApp
