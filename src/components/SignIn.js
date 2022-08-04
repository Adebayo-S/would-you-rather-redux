import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from "../actions/authedUser";

class SignIn extends Component {
    state = { userID: ''}

    handleChange = (e) => {
        const userID = e.target.value;
        this.setState({ userID });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { userID } = this.state;
        const { dispatch } = this.props;
        dispatch(setAuthedUser(userID));
    }

    render() {
        const { users } = this.props;

        return (
            <div className="container">
                <div className="login-card">
                    <div className="login-card-head">
                        <h2>Welcome to the Would You Rather App!</h2>
                        <h5>Please sign in to continue</h5>
                    </div>
                    <div className="login-card-body">
                        <div className="login-img">
                            <img src="../utils/login.gif" alt="Sign In icon" className="login-icon" />
                            <h2>Sign In</h2>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <select
                                onChange={this.handleChange}
                                >
                                <option>Select User</option>
                                {Object.values(users).map((user) => (
                                    <option
                                        key={user.id}
                                        value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                            <button
                                className="btn">
                                Sign In
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(users) {
    return users;
}

export default connect(mapStateToProps)(SignIn)
