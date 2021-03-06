import React from 'react';
import {connect} from 'react-redux';
import { getAuthUserData } from "../../redux/auth-reducer.js";
import Header from './Header.jsx';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);

