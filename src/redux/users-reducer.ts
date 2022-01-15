import {usersAPI} from '../api/api';
import { UserType } from '../types/types';
import {updateObjectInArray} from '../utils/objects-helpers';

const FOLLOW = 'social/users/FOLLOW';
const UNFOLLOW = 'social/users/UNFOLLOW';
const SET_USERS = 'social/users/SET-USERS';
const SET_CURRNET_PAGE = 'social/users/SET-CURRNET-PAGE';
const SET_TOTAL_USERS_COUNT = 'social/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social/users/TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
	users: [] as Array<UserType>,
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [] as Array<number>,
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
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
			return {...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)}

		default:
			return state;
	}
}

type FollowSuccessActionType = {
	type: typeof FOLLOW
	userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => {
	return {type: FOLLOW, userId}
}

type UnollowSuccessActionType = {
	type: typeof UNFOLLOW
	userId: number
}

export const unfollowSuccess = (userId: number): UnollowSuccessActionType => {
	return {type: UNFOLLOW, userId}
}

type SetUsersActionType = {
	type: typeof SET_USERS
	users: Array<UserType>
}

export const setUsers = (users: Array<UserType>): SetUsersActionType => {
	return {type: SET_USERS, users}
}

type SetCurrentPageActionType = {
	type: typeof SET_CURRNET_PAGE
	currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
	return {type: SET_CURRNET_PAGE, currentPage}
}

type SetTotalUsersCountActionType = {
	type: typeof SET_TOTAL_USERS_COUNT
	totalCount: number
}

export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => {
	return {type: SET_TOTAL_USERS_COUNT, totalCount}
}

type ToggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
	return {type: TOGGLE_IS_FETCHING, isFetching}
}

type ToggleFollowingProgressActionType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => {
	return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}

export const getUsers = (currnetPage: number, pageSize: number) => {
	return async (dispatch: any) => {
		dispatch(toggleIsFetching(true));
		let response = await usersAPI.getUsers(currnetPage, pageSize);
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(response.items));
		dispatch(setTotalUsersCount(response.totalCount));
	}
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId);
	if(response.data.resultCode === 0) {
		dispatch(actionCreator(userId));
	}
	dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
	return async (dispatch: any) => {
		followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess);
	}
}

export const unfollow = (userId: number) => {
	return async (dispatch: any) => {
		followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess);
	}
}

export default usersReducer;