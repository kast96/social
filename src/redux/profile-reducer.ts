import {profileAPI} from '../api/api';
import { stopSubmit } from 'redux-form';
import { PostType, ProfileType, PhotosType } from '../types/types';

const ADD_POST = 'social/profile/ADD-POST';
const DELETE_POST = 'social/profile/DELETE-POST';
const SET_USER_PROFILE = 'social/profile/SET-USER-PROFILE';
const SET_STATUS = 'social/profile/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'social/profile/SAVE-PHOTO-SUCCESS';

let initialState = {
    profile: null as ProfileType | null,
    posts: [
        {id: 1, message: 'Post 1'},
        {id: 2, message: 'Post 2'}
    ] as Array<PostType>,
    status: ''
};

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPost}],
            };

        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.post)],
            };

        case SET_USER_PROFILE:
            console.log(action.profile);
            
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos } as ProfileType
            }

        default:
            return state;
    }
}

type AddPostActionType = {
    type: typeof ADD_POST
    newPost: string
}

export const addPostActionCreator = (post: string): AddPostActionType => {
	return {type: ADD_POST, newPost: post}
}

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}

export const deletePostActionCreator = (postId: number): DeletePostActionType => {
	return {type: DELETE_POST, postId}
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
	return {type: SET_USER_PROFILE, profile}
}

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = (status: string): SetStatusActionType => {
    return {type: SET_STATUS, status}
}

type SavePhotoSuccessActionType = {
    type:  typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    if (!userId) return;
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    if (!userId) return;
	let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        let message = (response.data.messages.length > 0 ? response.data.messages.join(', ') : 'Some Error')
        dispatch(stopSubmit('profileData', {_error: message}));
        return Promise.reject(message);
    }
}

export default profileReducer;