import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form'
import { chatAPI, ChatMessageType } from '../api/chat-api'
import { BaseThunkType, InferActionsType } from './redux-store'

const MESSAGES_RECEIVED = 'social/auth/MESSAGES-RECEIVED';

let initialState = {
    messages: [] as Array<ChatMessageType>
};

type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            };

        default:
            return state;
    }
}

type ActionsType = InferActionsType<typeof actions>

export const actions = {
    messagesReceived: (messages: Array<ChatMessageType>) => ({type: MESSAGES_RECEIVED, payload: {messages}}) as const,
}

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

let _newMessagesHandler: ((messages: Array<ChatMessageType>) => void) | null = null

const newMessagesHandlerCreator = (dispatch: Dispatch) => {
    if (!_newMessagesHandler) {
        _newMessagesHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }

    return _newMessagesHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessagesHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe(newMessagesHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer;