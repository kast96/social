import { Dispatch } from 'redux';
import { APIResponseType, ResultCodeEnum } from '../api/api';
import {usersAPI} from '../api/users-api';
import { UserType } from '../types/types';
import {updateObjectInArray} from '../utils/objects-helpers';
import { BaseThunkType, InferActionsType } from './redux-store';

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
}

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = InferActionsType<typeof actions>

export const actions = {
	followSuccess: (userId: number) => ({type: FOLLOW, userId} as const),
	unfollowSuccess: (userId: number) => ({type: UNFOLLOW, userId} as const),
	setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
	setCurrentPage: (currentPage: number) => ({type: SET_CURRNET_PAGE, currentPage} as const),
	setTotalUsersCount: (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount} as const),
	toggleIsFetching: (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const),
	toggleFollowingProgress: (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId} as const)
}

type ThunkType = BaseThunkType<ActionsType>
type DispatchType = Dispatch<ActionsType>

export const getUsers = (currnetPage: number, pageSize: number): ThunkType => async (dispatch) => {
	dispatch(actions.toggleIsFetching(true));
	let response = await usersAPI.getUsers(currnetPage, pageSize);
	dispatch(actions.toggleIsFetching(false));
	dispatch(actions.setUsers(response.items));
	dispatch(actions.setTotalUsersCount(response.totalCount));
}

const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: (userId: number) => Promise<APIResponseType>, actionCreator: (userId: number) => ActionsType) => {
	dispatch(actions.toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId);
	if(response.resultCode === ResultCodeEnum.Success) {
		dispatch(actionCreator(userId));
	}
	dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
	await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), actions.followSuccess);
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
	await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), actions.unfollowSuccess);
}

export default usersReducer;