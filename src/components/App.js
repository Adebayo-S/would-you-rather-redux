import { React, Fragment, Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import '../App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        {this.props.loading === true ? null
        : this.props.isSignedIn ? <BrowserRouter>
          <Route path="/" component={SignIn} />
        </BrowserRouter> : <p>SIGNED</p> /*:
          <Fragment>
            <Navbar />
            <BrowserRouter>
              <Switch>
                {/* <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/question" component={Question} />
                <Route path="/leaderboard" component={Leaderboard} /> */}
              {/*</div></Switch>
            </BrowserRouter>
              </Fragment>*/}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    isSignedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App);
