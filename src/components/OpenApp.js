import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import UserPage from "./UserPage";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import ErrorPage from "./ErrorPage";
import { PropTypes } from "prop-types";
import { userLogout } from '../actions/users';

import {
    Container, Row, Col, Navbar, Nav, NavLink,
    NavbarBrand,
} from 'react-bootstrap';

class OpenApp extends Component {

    render() {
        return (
        <Container>
            <div>hello</div>
            {/* <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/user/:id" component={UserPage} />
                <Route path="/question" component={NewQuestion} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route component={ErrorPage} />
            </Switch> */}
        </Container>
        );
    }
}

export default OpenApp;
