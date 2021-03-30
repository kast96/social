const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATR_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
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