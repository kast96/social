import { stopSubmit } from 'redux-form';
import {authAPI, securityAPI} from '../api/api.js';

const SET_USER_DATA = 'social/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social/auth/GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => {
	return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}}
}

export const getCaptchaUrlSuccess = (captchaUrl) => {
	return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}
}

export const getAuthUserData = () =>  async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = (response.data.messages.length > 0 ? response.data.messages.join(', ') : 'Some Error')
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}

export default authReducer;