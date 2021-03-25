import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Post 1'},
				{id: 2, message: 'Post 2'}
			],
			newPostText: 'newPostText'
		},
		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Dialog 1'},
				{id: 2, name: 'Dialog 2'},
				{id: 3, name: 'Dialog 3'},
				{id: 4, name: 'Dialog 4'}
			],
			messages: [
				{id: 1, message: 'Message 1'},
				{id: 2, message: 'Message 2'},
				{id: 3, message: 'Message 3'}
			],
			newMessageText: 'newMessageText'
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	}
};

export default store;