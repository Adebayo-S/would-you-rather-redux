import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import InputGroup from 'react-bootstrap/InputGroup'
import { handleSaveAnswer } from '../actions/shared'
import { connect } from 'react-redux'
import AlertDismissible from './AlertDismissible'
import { Button } from 'react-bootstrap'

class SelectAnswer extends Component {
  state = {
    answer: '',
    error: false,
  }

  componentDidUpdate() {
    const { error } = this.state
    if (error) {
      setTimeout(() => {
        this.setState({ error: false })
      }, 3000)
    }
  }

  handleChange = (e) => {
    if (e.target.checked) {
      this.setState({ answer: e.target.value })
    } else {
      this.setState({ answer: '' })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, question, authedUser } = this.props
    const { answer } = this.state
    console.log(answer)
    answer
      ? dispatch(handleSaveAnswer(authedUser, question.id, answer))
      : this.setState({ error: true })
  }

  render() {
    const { question, user } = this.props
    const { error } = this.state

    return (
      <CardGroup>
        <Card>
          {error && <AlertDismissible />}
          <Card.Img variant="top" src={user.avatarURL} />
          <Card.Header>{user.name}</Card.Header>
          <Card.Body>
            <Card.Title className="mb-4">Would you rather...</Card.Title>
            <Card.Text>
              <InputGroup className="mb-3">
                <InputGroup.Checkbox
                  aria-label="Checkbox for following text input"
                  value="optionOne"
                  onClick={this.handleChange}
                />
                <span className="ps-3 pt-1">{question.optionOne.text}?</span>
              </InputGroup>
            </Card.Text>
            <Card.Text>
              <InputGroup className="mb-3">
                <InputGroup.Checkbox
                  aria-label="Checkbox for following text input"
                  value="optionTwo"
                  onClick={this.handleChange}
                />
                <span className="ps-3 spt-1">{question.optionTwo.text}?</span>
              </InputGroup>
            </Card.Text>
            <Button variant="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(SelectAnswer)
