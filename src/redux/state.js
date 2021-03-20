let rerenderEntireTree = () => {};

let state = {
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
}

export const addPost = () => {
	state.profilePage.posts.push({
		id: 3,
		message: state.profilePage.newPostText
	});
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export const addMessage = () => {
	state.dialogsPage.messages.push({
		id: 4,
		message: state.dialogsPage.newMessageText
	});
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
	state.dialogsPage.newMessageText = newText;
	rerenderEntireTree(state);
}

export let subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state;