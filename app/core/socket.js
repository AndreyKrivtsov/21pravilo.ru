import WebSocket from 'ws'

let instance = null

class Socket {
    constructor() {
        if (!instance) instance = this
        return instance
    }
}

export default Socket