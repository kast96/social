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

	getState() {
		return this._state;
	},

	_callSubscriber() {
		console.log('State changed');
	},

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
	
	subscribe(observer) {
		this._callSubscriber = observer;
	}
};

export default store;