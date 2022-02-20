import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import appReducer from './app-reducer';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import sidebarReducer from './sidebar-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { ThunkAction } from 'redux-thunk';

let rootReduser = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
});

type rootReduserType = typeof rootReduser;
export type AppStateType = ReturnType<rootReduserType>;

export type InferActionsType<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReduser, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;