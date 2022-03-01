import {profileAPI} from '../api/profile-api';
import { stopSubmit } from 'redux-form';
import { PostType, ProfileType, PhotosType } from '../types/types';
import { BaseThunkType, InferActionsType } from './redux-store';

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
    status: '',
    newPostText: ''
};

type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.post}],
            };

        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(post => post.id !== action.postId)],
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
                profile: {...state.profile, photos: action.photos } as ProfileType
            }

        default:
            return state;
    }
}

type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

export const actions = {
    addPostActionCreator: (post: string) => ({type: ADD_POST, post}) as const,
    deletePostActionCreator: (postId: number) => ({type: DELETE_POST, postId}) as const,
    setUserProfile: (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const,
    setStatus: (status: string) => ({type: SET_STATUS, status}) as const,
    savePhotoSuccess: (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos}) as const
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    if (!userId) return;
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    if (!userId) return;
	let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        if (userId !== null) {
            dispatch(getUserProfile(userId));
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        let message = (data.messages.length > 0 ? data.messages.join(', ') : 'Some Error')
        dispatch(stopSubmit('profileData', {_error: message}));
        return Promise.reject(message);
    }
}

export default profileReducer;