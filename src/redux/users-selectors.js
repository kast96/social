import { createSelector } from "reselect";

export const getStateUsers = (state) => {
	return state.usersPage.users;
}

export const getStateUsersSuper = createSelector(getStateUsers, (users) => {
	return users.filter((user) => {
		return user.id === 19969;
	});
});

export const getStatePageSize = (state) => {
	return state.usersPage.pageSize;
}

export const getStateTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount;
}

export const getStateCurrentPage = (state) => {
	return state.usersPage.currentPage;
}

export const getStateIsFetching = (state) => {
	return state.usersPage.isFetching;
}

export const getStateFollowingInProgress = (state) => {
	return state.usersPage.followingInProgress;
}