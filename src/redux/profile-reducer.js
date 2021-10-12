import {profileAPI} from '../api/api.js';

const ADD_POST = 'social/profile/ADD-POST';
const DELETE_POST = 'social/profile/DELETE-POST';
const SET_USER_PROFILE = 'social/profile/SET-USER-PROFILE';
const SET_STATUS = 'social/profile/SET-STATUS';

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

export default profileReducer;