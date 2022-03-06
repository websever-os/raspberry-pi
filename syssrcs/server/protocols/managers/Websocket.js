module.exports = function Websocket(web){
	let Websocket = require('../layers/applications/Websocket')
	let Send = require('./sends/Send')
	this.https = null
	this.socket = null
    this.listens = function(callback){
        this.socket = new Websocket(this.https)
        this.socket.listen(callback)
    }
	this.setsHttps = function(https){
		this.https = https
	}
	this.sends = new Send(web)
}