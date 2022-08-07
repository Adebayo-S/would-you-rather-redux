import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

class Leaderboard extends Component {
  render() {
    const { sortedUsers } = this.props

    return (
      <div className="my-container">
        {Object.values(sortedUsers).map((sortedUser) => {
          return (
            <Card
              key={sortedUser.user.id}
              style={{ width: '10rem' }}
              className="mb-2"
            >
              <Card.Img variant="top" src={sortedUser.user.avatarURL} />
              <Card.Header>{sortedUser.user.name}</Card.Header>
              <Card.Body>
                <Card.Title className="font-weight-normal">Created</Card.Title>
                <Card.Text className="text-primary">
                  {sortedUser.user.questions.length}
                </Card.Text>
                <Card.Title className="font-weight-normal">
                  {' '}
                  Answered{' '}
                </Card.Title>
                <Card.Text className="text-success">
                  {Object.keys(sortedUser.user.answers).length}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <span className="pe-2">Total Score:</span>
                {Object.keys(sortedUser.user.answers).length +
                  sortedUser.user.questions.length}
              </Card.Footer>
            </Card>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const sortedUsers = Object.values(users)
    .map((user) => ({ user }))
    .sort(
      (a, b) =>
        b.user.questions.length +
        Object.keys(b.user.answers).length -
        a.user.questions.length -
        Object.keys(a.user.answers).length,
    )

  console.log(sortedUsers)
  console.log(sortedUsers[0].user.questions.length)

  return {
    sortedUsers,
  }
}

export default connect(mapStateToProps)(Leaderboard)
