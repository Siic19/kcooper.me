import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email
          <Field name="email" component="input" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="password">Password
          <Field name="password" component="input" type="password" />
        </label>
      </div>
      <button type="submit" disabled={pristine || submitting}>
        Login
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const LoginFormMutation = reduxForm({
  // a unique name for the form
  form: 'loginForm',
})(LoginForm);

export default LoginFormMutation;
