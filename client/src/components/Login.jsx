import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {
  submit = values => {
    console.log(values.email);
  };
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default Login;
