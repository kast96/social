const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATR_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
		}
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

	/*
	addPost() {
		this._state.profilePage.posts.push({
			id: 3,
			message: this._state.profilePage.newPostText
		});
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	addMessage() {
		this._state.dialogsPage.messages.push({
			id: 4,
			message: this._state.dialogsPage.newMessageText
		});
		this._state.dialogsPage.newMessageText = '';
		this._callSubscriber(this._state);
	},
	updateNewMessageText(newText) {
		this._state.dialogsPage.newMessageText = newText;
		this._callSubscriber(this._state);
	},
	*/
	
	dispatch(action) {
		if (action.type === ADD_POST) {
			this._state.profilePage.posts.push({
				id: 3,
				message: this._state.profilePage.newPostText
			});
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === ADD_MESSAGE) {
			this._state.dialogsPage.messages.push({
				id: 4,
				message: this._state.dialogsPage.newMessageText
			});
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATR_NEW_MESSAGE_TEXT) {
			this._state.dialogsPage.newMessageText = action.newText;
			this._callSubscriber(this._state);
		}
	}
};

export const addPostActionCreator = () => {
	return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
	return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const addMessageActionCreator = () => {
	return {type: ADD_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) => {
	return {type: UPDATR_NEW_MESSAGE_TEXT, newText: text}
}

export default store;