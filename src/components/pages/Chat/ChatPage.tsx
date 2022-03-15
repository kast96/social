import { useEffect, useState } from "react"

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
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            setTimeout(createChannel, 3000)
        }

        function createChannel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws?.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }
        createChannel()

        return () => {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()
        }
    }, [])

    return (
        <div>
            <Messages wsChannel={wsChannel} />
            <AddMessageForm wsChannel={wsChannel} />
        </div>
    )
}

const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [messages, setMessages] = useState<Array<ChatMessageType>>([])

    useEffect(() => {
        let messageHander = (e: MessageEvent) => {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
        }

        wsChannel?.addEventListener('message', messageHander)

        return () => {
            wsChannel?.removeEventListener('message', messageHander)
        }
    }, [wsChannel])
    
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

const AddMessageForm: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        let openHander = () => {
            setReadyStatus('ready');
        }

        wsChannel?.addEventListener('open', openHander)

        return () => {
            wsChannel?.removeEventListener('open', openHander)
        }
    }, [wsChannel])

    const sendMessage = () => {
        if (!message) return;

        wsChannel?.send(message)
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={wsChannel === null || readyStatus !== 'ready'} onClick={sendMessage}>send</button>
            </div>
        </div>
    )
}

export default ChatPage