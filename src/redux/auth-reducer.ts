import { stopSubmit } from 'redux-form'
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from '../api/api'
import { authAPI } from '../api/auth-api'
import { securityAPI } from '../api/security-api'
import { BaseThunkType, InferActionsType } from './redux-store';

const SET_USER_DATA = 'social/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social/auth/GET-CAPTCHA-URL-SUCCESS';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = InferActionsType<typeof actions>

export const actions = {
    setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}}) as const,
    getCaptchaUrlSuccess: (captchaUrl: string) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}}) as const,
}

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

export const getAuthUserData = (): ThunkType =>  async (dispatch) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodeEnum.Success) {
        let {id, email, login} = meData.data;
        dispatch(actions.setUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData());
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = (loginData.messages.length > 0 ? loginData.messages.join(', ') : 'Some Error')
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(actions.setUserData(null, null, null, false));
    }
}

export default authReducer;