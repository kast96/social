import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Profile from './Profile.jsx';
import { setUserProfile } from './../../redux/profile-reducer.js';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
