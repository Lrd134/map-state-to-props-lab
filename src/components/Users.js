import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapPropsToState = state => {
  debugger;
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapPropsToState)(Users)
