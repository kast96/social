import {applyMiddleware, combineReducers, createStore} from 'redux';
import appReducer from './app-reducer.js';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import usersReducer from './users-reducer.js';
import sidebarReducer from './sidebar-reducer.js';
import authReducer from './auth-reducer.js';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let redusers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer
});
let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;