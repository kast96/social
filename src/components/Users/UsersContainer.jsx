
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from './Users.jsx';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/users-reducer.js';
import Preloader from './../common/Preloader/Preloader.jsx';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetchingAC(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currnetPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetchingAC(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (page) => {
    this.props.toggleIsFetchingAC(true);
    this.props.setCurrentPage(page);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetchingAC(false);
      this.props.setUsers(response.data.items);
    });
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
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsFetchingAC: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);