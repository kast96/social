import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Profile from './Profile.jsx';
import { setUserProfile } from './../../redux/profile-reducer.js';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/16234`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
