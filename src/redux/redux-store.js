import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import usersReducer from './users-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer
});
let store = createStore(redusers);

export default store;