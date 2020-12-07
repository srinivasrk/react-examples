import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    if (this.props.user !== undefined) {
      return <div style={{'fontWeight': 600}}> {this.props.user.name} </div>
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId);
  return { user: user };
}

export default connect(mapStateToProps)(UserHeader);