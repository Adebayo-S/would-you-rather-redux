import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { Card, ListGroup, Button } from 'react-bootstrap'

class Question extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { option, history } = this.props
    history.push(`/questions/${option.id}`)
  }

  render() {
    const { option, status } = this.props
    const { author, avatarURL, optionOne, optionTwo } = option

    const avatar = avatarURL
    //.substring(1);

    return (
      <Form onSubmit={this.handleSubmit}>
        <Card style={{ width: '20rem' }} className="mb-5">
          <Card.Img variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>{author}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <span className="font-weight-bold">option 1: </span>
              <span>{optionOne.text}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="font-weight-bold">option 2: </span>
              <span>{optionTwo.text}</span>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            {status === 'unanswered' ? (
              <Button type="submit" variant="primary">
                Submit answer
              </Button>
            ) : (
              <Button type="submit" variant="primary">
                See Result
              </Button>
            )}
          </Card.Body>
        </Card>
      </Form>
    )
  }
}

export default withRouter(Question)
