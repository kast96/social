const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.posts.push({
                id: 3,
                message: state.newPostText
            });
            state.newPostText = '';
            break;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;

        default:
            break;
    }
    return state;
}

export const addPostActionCreator = () => {
	return {type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
	return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;