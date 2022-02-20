import { InferActionsType } from "./redux-store";

const ADD_MESSAGE = 'social/dialogs/ADD-MESSAGE';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
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
    ] as Array<MessageType>,
    newMessageText: ''
}

type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ActionsType = InferActionsType<typeof actions>

export const actions = {
    addMessage: (message: string) => ({type: ADD_MESSAGE, newMessage: message}) as const
}

export default dialogsReducer;