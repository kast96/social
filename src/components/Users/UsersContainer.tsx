
import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, actions, getUsers, FilterType } from '../../redux/users-reducer';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';
import { getStateUsers, getStatePageSize, getStateTotalUsersCount, getStateCurrentPage, getStateIsFetching, getStateFollowingInProgress, getStateFilter } from '../../redux/users-selectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>
  followingInProgress: Array<number>
  filter: FilterType
}

type MapDispatchToPropsType = {
  getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
  setCurrentPage: (pageNubmer: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const {currentPage, pageSize, filter} = this.props;
    this.props.getUsers(currentPage, pageSize, filter);
  }

  onPageChanged = (pageNubmer: number) => {
    const {pageSize, filter} = this.props;
    this.props.getUsers(pageNubmer, pageSize, filter);
    this.props.setCurrentPage(pageNubmer);
  }

  onFilterChanged = (filter: FilterType) => {
    const {pageSize} = this.props;
    this.props.getUsers(1, pageSize, filter);
  }

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        onFilterChanged={this.onFilterChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress}
      />
      </>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: getStateUsers(state),
    pageSize: getStatePageSize(state),
    totalUsersCount: getStateTotalUsersCount(state),
    currentPage: getStateCurrentPage(state),
    isFetching: getStateIsFetching(state),
    followingInProgress: getStateFollowingInProgress(state),
    filter: getStateFilter(state)
  }
}

export default compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {follow, unfollow, setCurrentPage: actions.setCurrentPage, getUsers}),
)(UsersContainer);