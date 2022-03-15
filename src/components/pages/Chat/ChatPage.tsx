import { useEffect, useState } from "react"

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

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
    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<Array<ChatMessageType>>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e: MessageEvent) => {            
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
        })
    }, [])
    
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

    const sendMessage = () => {
        if (!message) return;

        wsChannel.send(message)
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}

export default ChatPage