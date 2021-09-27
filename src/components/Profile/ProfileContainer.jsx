import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';
import { getUserProfile, getStatus, updateStatus } from './../../redux/profile-reducer.js';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 16624;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} updateStatus={this.props.updateStatus} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
