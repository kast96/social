import { Dispatch } from 'redux';
import { stopSubmit } from 'redux-form'
import { chatAPI, ChatMessageAPIType, StatusType } from '../api/chat-api'
import { BaseThunkType, InferActionsType } from './redux-store'
import { v4 as uuidv4 } from 'uuid'

const MESSAGES_RECEIVED = 'social/auth/MESSAGES-RECEIVED';
const STATUS_CHANGED = 'social/auth/STATUS-CHANGED';

type ChatMessageType = ChatMessageAPIType & {id: string}

let initialState = {
    messages: [] as Array<ChatMessageType>,
    status: 'pending' as StatusType
};

type InitialStateType = typeof initialState;

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: uuidv4()}))].filter((m, index, array) => index >= array.length - 100)
            };

        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload.status
            };

        default:
            return state;
    }
}

type ActionsType = InferActionsType<typeof actions>

export const actions = {
    messagesReceived: (messages: Array<ChatMessageAPIType>) => ({type: MESSAGES_RECEIVED, payload: {messages}}) as const,
    statusChanged: (status: StatusType) => ({type: STATUS_CHANGED, payload: {status}}) as const,
}

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

let _newMessagesHandler: ((messages: Array<ChatMessageAPIType>) => void) | null = null
const newMessagesHandlerCreator = (dispatch: Dispatch) => {
    if (!_newMessagesHandler) {
        _newMessagesHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }

    return _newMessagesHandler
}
let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (!_statusChangedHandler) {
        _statusChangedHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }

    return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('message-received', newMessagesHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('message-received', newMessagesHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}

export default chatReducer;