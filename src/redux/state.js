import {rerenderEntireTree} from '../render.js';

let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Post 1'},
			{id: 2, message: 'Post 2'}
		]
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
		]
	}
}

export let addPost = (postMessage) => {
  state.profilePage.posts.push({
		id: 3,
		message: postMessage
	});
	rerenderEntireTree(state);
}

export default state;