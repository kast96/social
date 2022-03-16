
let subscribers = [] as Array<subscriberType>

let ws: WebSocket | null = null;

const closeHandler = () => {
    console.log('CLOSE WS');
    setTimeout(createChannel, 3000)
}

const messageHander = (e: MessageEvent) => {
    const newMessage = JSON.parse(e.data)
    subscribers.forEach(s => s(newMessage));
}

function createChannel() {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHander)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messageHander)
        ws?.close()
    },
    subscribe(callback: subscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },

    unsubscribe(callback: subscriberType) {
        subscribers = subscribers.filter(s => s !== callback)
    },

    sendMessage(message: string) {
        ws?.send(message)
    }
}

type subscriberType = (messages: Array<ChatMessageType>) => void

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}