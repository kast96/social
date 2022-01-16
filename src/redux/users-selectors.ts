import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const getStateUsers = (state: AppStateType) => {
	return state.usersPage.users;
}

export const getStateUsersSuper = createSelector(getStateUsers, (users) => {
	return users.filter((user) => {
		return user.id === 19969;
	});
});

export const getStatePageSize = (state: AppStateType) => {
	return state.usersPage.pageSize;
}

export const getStateTotalUsersCount = (state: AppStateType) => {
	return state.usersPage.totalUsersCount;
}

export const getStateCurrentPage = (state: AppStateType) => {
	return state.usersPage.currentPage;
}

export const getStateIsFetching = (state: AppStateType) => {
	return state.usersPage.isFetching;
}

export const getStateFollowingInProgress = (state: AppStateType) => {
	return state.usersPage.followingInProgress;
}