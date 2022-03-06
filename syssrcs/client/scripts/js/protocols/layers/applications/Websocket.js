web.sys.srcs.protocols.layers.applications.Websocket = function (addr) {
    this.socket = new WebSocket(addr)
    this.socket.binaryType = "arraybuffer"
    this.readyState = null
    this.onopen = function(callback) {
        this.socket.onopen = function(msg) {
            callback(msg)
        }
    }
    this.onclose = function(callback){
        this.socket.onclose = function(msg) {
            callback(msg)
        }
    }
    this.onerror = function(callback){
        this.socket.onerror = function(msg) {
            callback(msg)
        }
    }
    this.onmsg = function(msg){
        this.socket.onmsg(msg)
    }
    this.onmessage = function(callback){
        this.socket.onmessage = function(msg){
            if (msg.isTrusted){
                callback(msg.data)
            }
        }
    }
    this.sends = function(data){
        this.socket.send(data)
    }
}