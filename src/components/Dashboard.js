import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsSet from './QuestionsSet';
import { PropTypes } from 'prop-types';
import {
    Container, Row, Col, Navbar, Nav, NavLink,
    NavbarBrand,
} from 'react-bootstrap';

class Dashboard extends Component {
    static propTypes = {
        answered: PropTypes.array.isRequired,
        unanswered: PropTypes.array.isRequired,
    }

    render() {
        const { answered, unanswered } = this.props;
        return (
            <Container>
                <Row className="justify-content-center">
                <QuestionsSet answered={answered} unanswered={unanswered} />
                </Row>
            </ Container>
        );
    }
}

function mapStateToProps({ questions, authedUser, users }) {
    const mapQuestionToAvatarURL = (q, users) => {
        return { ...q, avatarURL: users[q.author].avatarURL };
    }
    const user = users[authedUser];
    let answered = Object.values(questions).filter(
        q => q.optionOne.votes.includes(user.id)
            || q.optionTwo.votes.includes(user.id))

    let unanswered = Object.values(questions).filter(
        q => !answered.includes(q));

        console.log(answered);
        console.log(unanswered);
        console.log(users);

    answered = answered.map(q => mapQuestionToAvatarURL(q, users));
    unanswered = unanswered.map(q => mapQuestionToAvatarURL(q, users));

    return {
        answered,
        unanswered
    }
}

export default connect(mapStateToProps)(Dashboard)
