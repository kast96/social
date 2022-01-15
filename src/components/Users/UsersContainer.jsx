
import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setCurrentPage, getUsers } from '../../redux/users-reducer';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';
import { getStateUsers, getStatePageSize, getStateTotalUsersCount, getStateCurrentPage, getStateIsFetching, getStateFollowingInProgress } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currnetPage, pageSize} = this.props;
    this.props.getUsers(currnetPage, pageSize);
  }

  onPageChanged = (pageNubmer) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNubmer, pageSize);
    this.props.setCurrentPage(pageNubmer);
  }

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        setCurrentPage={this.props.setCurrentPage} 
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: getStateUsers(state),
    pageSize: getStatePageSize(state),
    totalUsersCount: getStateTotalUsersCount(state),
    currentPage: getStateCurrentPage(state),
    isFetching: getStateIsFetching(state),
    followingInProgress: getStateFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
)(UsersContainer);