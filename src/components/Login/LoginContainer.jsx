
import Login from './Login';
import {login} from '../../redux/auth-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password, rememberMe, captcha) => {
      dispatch(login(email, password, rememberMe, captcha));
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
