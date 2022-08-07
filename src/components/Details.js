import React, { Component } from 'react'
import ErrorPage from './ErrorPage'
import SelectAnswer from './SelectAnswer'
import ShowAnswers from './ShowAnswers'
import { connect } from 'react-redux'
import {
  Container,
} from 'react-bootstrap'

class Details extends Component {
  render() {
    const { questions, users, authedUser } = this.props
    const { id } = this.props.match.params
    const user = users[authedUser]
    const question = questions[id]
    const answer = user.answers[id]

    if (!question) {
      return <ErrorPage />
    }

    return (
      < Container>
        {!answer ? (
          <SelectAnswer question={question} user={user} />
        ) : (
          <ShowAnswers answer={answer} question={question} user={user} />
        )}
      </ Container>
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

export default connect(mapStateToProps)(Details)
