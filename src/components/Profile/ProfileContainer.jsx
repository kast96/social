import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';
import { getUserProfile } from './../../redux/profile-reducer.js';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
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

let AuthContainerComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthContainerComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
