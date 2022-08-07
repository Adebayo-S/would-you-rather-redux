import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { withRouter } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
    Container, Row, Col, Navbar, Nav, NavLink,
    NavbarBrand, ListGroup, Button
} from 'react-bootstrap';

class ShowAnswers extends Component {
    handleClick = () => {
        this.props.history.push('/dashboard');
    }

  render() {
    const { question, user } = this.props;
    const lenOptionOneVotes = question.optionOne.votes.length;
    const lenOptionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = lenOptionOneVotes + lenOptionTwoVotes;
    const optionOnePercent = Math.round((lenOptionOneVotes / totalVotes) * 100);
    const optionTwoPercent = Math.round((lenOptionTwoVotes / totalVotes) * 100);

    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={user.avatarURL} />
                <Card.Body>
                <Card.Title className="mb-3">Result</Card.Title>
                <Card.Text>
                    <p>Would you rather {question.optionOne.text} ?</p>
                    <ProgressBar animated now={optionOnePercent} label={`${optionOnePercent}%`} />
                    <p>{lenOptionOneVotes} out of {totalVotes} votes</p>
                </Card.Text>
                <Card.Text>
                    <p>Would you rather {question.optionTwo.text} ?</p>
                    <ProgressBar animated variant="warning" now={optionTwoPercent} label={`${optionTwoPercent}%`} />
                    <p>{lenOptionTwoVotes} out of {totalVotes} votes</p>
                </Card.Text>
                <Button className="mt-3" variant="primary" onClick={this.handleClick}>Done</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    );
  }
}

ShowAnswers.propTypes = {
  question: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default withRouter(ShowAnswers);
