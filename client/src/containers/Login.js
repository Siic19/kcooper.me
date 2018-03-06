import { connect } from 'react-redux';
import LoginComponent from '../components/Login';
import authenticateUser from '../actions/actions_authenticate';

// const mapStateToProps = (state) => {
//   return {
//     errors: state.errors,
//   };
// };

const mapDispatchToProps = dispatch => ({
  authenticateUser(auth) {
    dispatch(authenticateUser(auth));
  },
});

const Login = connect(null, mapDispatchToProps)(LoginComponent);

export default Login;
