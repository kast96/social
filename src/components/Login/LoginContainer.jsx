
import Login from './Login.jsx';
import {login} from '../../redux/auth-reducer.js';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password, rememberMe) => {
      dispatch(login(email, password, rememberMe));
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
