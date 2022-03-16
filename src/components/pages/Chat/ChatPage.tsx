import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sendMessage, startMessagesListening, stopMessagesListening } from "../../../redux/chat-reducer"
import { AppStateType } from "../../../redux/redux-store"

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

export const ChatPage: React.FC = () => {
    return (
        <div>
            <h1>Chat</h1>
            <Chat />
        </div>
    )
}

const Chat: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}

const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)

    return (
        <div style={{height: '300px', overflowY: 'auto'}}>
            {messages.map((m, key) => <Message key={key} message={m} />)}
        </div>
    )
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    
    return (
        <div>
            <hr />
            <img src={message.photo} style={{width: '30px'}} alt={message.userName} />
            <b>{message.userName}</b>
            <br />
            <div>{message.message}</div>
        </div>
    )
}

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const sendMessageHandler = () => {
        if (!message) return;

        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={false} onClick={sendMessageHandler}>send</button>
            </div>
        </div>
    )
}

export default ChatPage