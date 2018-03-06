import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class Login extends Component {
  submit = (values) => {
    let error = false;
    if (!values.email || !values.password) {
      error = true;
      // this.props.loginBlankError(true);
      console.log('error - blank');
    }
    if (!error) {
      this.props.authenticateUser(values);
    }
  };

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

Login.propTypes = {
  authenticateUser: PropTypes.func.isRequired,
};

export default Login;
