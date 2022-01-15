const ADD_MESSAGE = 'social/dialogs/ADD-MESSAGE';

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number,
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dialog 1'},
        {id: 2, name: 'Dialog 2'},
        {id: 3, name: 'Dialog 3'},
        {id: 4, name: 'Dialog 4'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Message 1'},
        {id: 2, message: 'Message 2'},
        {id: 3, message: 'Message 3'}
    ] as Array<MessageType>
}

type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessage: string
}

export const addMessageActionCreator = (message: string): AddMessageActionType => {
	return {type: ADD_MESSAGE, newMessage: message}
}

export default dialogsReducer;