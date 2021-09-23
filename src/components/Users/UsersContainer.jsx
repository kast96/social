
import React from 'react';
import { connect } from 'react-redux';
import Users from './Users.jsx';
import { follow, unfollow, setCurrentPage, getUsers } from '../../redux/users-reducer.js';
import Preloader from './../common/Preloader/Preloader.jsx';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currnetPage, this.props.pageSize);
  }

  onPageChanged = (pageNubmer) => {
    this.props.getUsers(pageNubmer, this.props.pageSize);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(
  connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
  withAuthRedirect
)(UsersContainer);