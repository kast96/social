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
    let stateCopy;
    switch (action.type) {
        case ADD_MESSAGE:
            return stateCopy = {
                ...state,
                messages: [...state.messages, {id: 4, message: state.newMessageText}],
                newMessageText: ''
            };
    
        case UPDATR_NEW_MESSAGE_TEXT:
            return stateCopy = {
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
	return {type: ADD_MESSAGE}
}

export const updateNewMessageTextActionCreator = (text) => {
	return {type: UPDATR_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReducer;