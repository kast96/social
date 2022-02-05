
import Login from './Login';
import {login} from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
  isAuth: boolean
  captchaUrl: string | null
}

type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

const LoginContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {login})(Login);

export default LoginContainer;
