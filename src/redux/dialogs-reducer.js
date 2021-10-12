const ADD_MESSAGE = 'social/dialogs/ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessage}],
            };

        default:
            return state;
    }
}

export const addMessageActionCreator = (message) => {
	return {type: ADD_MESSAGE, newMessage: message}
}

export default dialogsReducer;