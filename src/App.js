import React, { Component } from 'react';
import UserInput from './components/UserInput'
import { connect } from 'react-redux';
import ConnectedUsers from './components/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers props={ this.props.users } />
      </div>
    );
  }
}

const mapPropsToState = state => {
  return { users: state.users }
}

export default connect(mapPropsToState)(App);
