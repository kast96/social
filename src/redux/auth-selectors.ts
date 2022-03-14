import { AppStateType } from "./redux-store";

export const getStateIsAuth = (state: AppStateType) => {
	return state.auth.isAuth;
}

export const getStateLogin = (state: AppStateType) => {
	return state.auth.login;
}