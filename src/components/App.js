import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import '../App.css';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Initiated.
          </p>
        </header>
      </div>
    );
  }
}

export default connect()(App);
