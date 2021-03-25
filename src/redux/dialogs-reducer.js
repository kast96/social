const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATR_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push({
                id: 4,
                message: state.newMessageText
            });
            state.newMessageText = '';
            break;
    
        case UPDATR_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            break;

        default:
            break;
    }
    return state;
}

export const addMessageActionCreator = () => {
	return {type: ADD_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) => {
	return {type: UPDATR_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReducer;