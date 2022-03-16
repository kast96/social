let subscribers = {
    'message-received': [] as Array<MessagesReceivedSubscriberType>,
    'status-changed': [] as Array<StatusChangedSubscriberType>,
}

type EventsNames = 'message-received' | 'status-changed'

let ws: WebSocket | null = null;

const closeHandler = () => {
    console.log('CLOSE WS');
    notifySubscribersAbouttatus('pending')
    setTimeout(createChannel, 3000)
}

const messageHander = (e: MessageEvent) => {
    const newMessage = JSON.parse(e.data)
    subscribers['message-received'].forEach(s => s(newMessage));
}

const openHander = () => {
    notifySubscribersAbouttatus('ready')
}

const errorHander = () => {
    console.log('REFRESH PAGE');
    notifySubscribersAbouttatus('error')
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHander)
    ws?.removeEventListener('open', openHander)
    ws?.removeEventListener('error', errorHander)
}

const notifySubscribersAbouttatus = (status: StatusType) => {
    subscribers['status-changed'].forEach(s => s(status))
}

function createChannel() {
    cleanUp()
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAbouttatus('pending')
    ws?.addEventListener('close', closeHandler)
    ws?.addEventListener('message', messageHander)
    ws?.addEventListener('open', openHander)
    ws?.addEventListener('error', errorHander)
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers['message-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe(eventName: EventsNames, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        //@ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            //@ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },

    unsubscribe(eventName: EventsNames, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        //@ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },

    sendMessage(message: string) {
        ws?.send(message)
    }
}

type MessagesReceivedSubscriberType = (messages: Array<ChatMessageAPIType>) => void
type StatusChangedSubscriberType = (status: StatusType) => void

export type ChatMessageAPIType = {
    message: string,
    photo: string,
    userId: number,
    userName: string,
}

export type StatusType = 'pending' | 'ready' | 'error'