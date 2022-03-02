import React from 'react';
import {connect} from 'react-redux';
import { logout } from "../../redux/auth-reducer";
import { AppStateType } from '../../redux/redux-store';
import Header from './Header';

type MapStatePropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchPropsType = {
  logout: () => void
}

class HeaderContainer extends React.Component<MapStatePropsType & MapDispatchPropsType> {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer);
