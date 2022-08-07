import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ErrorPage extends Component {

    render() {
        return (
            <div>Something went wrong</div>
        );
    }
}


export default withRouter(ErrorPage);
