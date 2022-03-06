module.exports = function Websocket(https){
    let WebSocket = require("ws")
    this.server = null
    this.listen = function(callback){
        this.server = new WebSocket.Server({
            server:https.server    
        })
        this.server.on("connection", function(socket, req){
			callback(socket, req)
        })
    }
}
