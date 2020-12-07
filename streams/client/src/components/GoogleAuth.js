import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
  componentDidMount () {
    window.gapi.load('client:auth2', () => {
      // after auth2 is loaded
      window.gapi.client.init({
        clientId: '786477460559-b2hups9r1qgknk3eqjf0rsv9jtccutom.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton () {
    if (this.props.isSignedIn === null || this.props.isSignedIn === false) {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" ></i> Sign in with google
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" ></i> Sign out
        </button>
      )
    }
  }

  render () {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);