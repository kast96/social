import React, { useEffect, useRef, useState } from "react"
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

    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    return (
        <div>
            {status === 'error' && <div>Some error occured. Please refresh page</div>}
            <Messages />
            <AddMessageForm />
        </div>
    )
}

const Messages: React.FC = () => {    
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScrollActive, setIsAutoScrollActive] = useState(true)

    const scrollhandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 50) {
            !isAutoScrollActive && setIsAutoScrollActive(true)
        } else {
            isAutoScrollActive && setIsAutoScrollActive(false)
        }
    }

    useEffect(() => {
        if (isAutoScrollActive) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages, isAutoScrollActive])

    return (
        <div style={{height: '300px', overflowY: 'auto'}} onScroll={scrollhandler}>
            {messages.map((m, key) => <Message key={m.id} message={m} />)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

const Message: React.FC<{message: ChatMessageType}> = React.memo(({message}) => {
    
    return (
        <div>
            <hr />
            <img src={message.photo} style={{width: '30px'}} alt={message.userName} />
            <b>{message.userName}</b>
            <br />
            <div>{message.message}</div>
        </div>
    )
})

const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

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
                <button disabled={status !== 'ready'} onClick={sendMessageHandler}>send</button>
            </div>
        </div>
    )
}

export default ChatPage