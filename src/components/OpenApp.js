import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Details from "./Details";
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
            {<Switch>
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/questions/:id" component={Details} />
                <Route path="/new" component={NewQuestion} />
                {/* <Route path="/login" component={Login} />
                <Route path="/user/:id" component={UserPage} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route component={ErrorPage} /> */}
            </Switch>}
        </Container>
        );
    }
}

export default OpenApp;
