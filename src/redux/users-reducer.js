import {usersAPI} from '../api/api.js';
import {updateObjectInArray} from '../utils/objects-helpers.js';

const FOLLOW = 'social/users/FOLLOW';
const UNFOLLOW = 'social/users/UNFOLLOW';
const SET_USERS = 'social/users/SET-USERS';
const SET_CURRNET_PAGE = 'social/users/SET-CURRNET-PAGE';
const SET_TOTAL_USERS_COUNT = 'social/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social/users/TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
			};
	
		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
			};

		case SET_USERS:
			return {...state, users: action.users}

		case SET_CURRNET_PAGE:
			return {...state, currentPage: action.currentPage}

		case SET_TOTAL_USERS_COUNT:
			return {...state, totalUsersCount: action.totalCount}

		case TOGGLE_IS_FETCHING:
			return {...state, isFetching: action.isFetching}

		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [state.followingInProgress.filter(id => id !== action.userId)]}

		default:
			return state;
	}
}

export const followSuccess = (userId) => {
	return {type: FOLLOW, userId}
}

export const unfollowSuccess = (userId) => {
	return {type: UNFOLLOW, userId}
}

export const setUsers = (users) => {
	return {type: SET_USERS, users}
}

export const setCurrentPage = (currentPage) => {
	return {type: SET_CURRNET_PAGE, currentPage}
}

export const setTotalUsersCount = (totalCount) => {
	return {type: SET_TOTAL_USERS_COUNT, totalCount}
}

export const toggleIsFetching = (isFetching) => {
	return {type: TOGGLE_IS_FETCHING, isFetching}
}

export const toggleFollowingProgress = (isFetching, userId) => {
	return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}

export const getUsers = (currnetPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		let response = await usersAPI.getUsers(currnetPage, pageSize);
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(response.items));
		dispatch(setTotalUsersCount(response.totalCount));
	}
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId);
	if(response.data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess);
	}
}

export const unfollow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess);
	}
}

export default usersReducer;