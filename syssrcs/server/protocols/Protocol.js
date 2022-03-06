const fs = require("fs")
const path = require("path")

module.exports = function Protocol(web){
    let Websocket = require('./managers/Websocket')
    let HTTP = require('./managers/HTTP')
    this.http = new HTTP()
	this.socket = new Websocket(web)
    this.listen = function(port, sPort, callback){
        this.http.normal.createServer(callback)
        this.http.secure.createServer(callback)
        this.http.normal.server.listen(port)
        this.http.secure.server.listen(sPort)
        this.socket.setsHttps(this.http.secure)
		web.socket = this.socket
    }
}

