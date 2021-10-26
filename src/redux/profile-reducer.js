import {profileAPI} from '../api/api.js';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'social/profile/ADD-POST';
const DELETE_POST = 'social/profile/DELETE-POST';
const SET_USER_PROFILE = 'social/profile/SET-USER-PROFILE';
const SET_STATUS = 'social/profile/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'social/profile/SAVE-PHOTO-SUCCESS';

let initialState = {
    profile: null,
    posts: [
        {id: 1, message: 'Post 1'},
        {id: 2, message: 'Post 2'}
    ],
    status: ''
};

const profileReducer = (state = initialState, action) => {
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
                profile: {...state.profile, photos: action.photos }
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (post) => {
	return {type: ADD_POST, newPost: post}
}

export const deletePostActionCreator = (post) => {
	return {type: DELETE_POST, post: post}
}

export const setUserProfile = (profile) => {
	return {type: SET_USER_PROFILE, profile}
}

export const setStatus = (status) => {
    return {type: SET_STATUS, status}
}

export const savePhotoSuccess = (photos) => {
    return {type: SAVE_PHOTO_SUCCESS, photos}
}

export const getUserProfile = (userId) => async (dispatch) => {
    if (!userId) return;
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    if (!userId) return;
	let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
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