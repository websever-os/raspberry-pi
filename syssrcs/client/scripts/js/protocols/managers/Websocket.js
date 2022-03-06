web.sys.srcs.protocols.managers.Websocket = function(web){
    const SID_SIZE = 48
    this.data = new web.Data()
    this.client = null
    this.listens = function(){
		this.addr = "wss://"+window.location.host
        this.client = new WebsocketLayer(this.addr)
        this.client.onmessage(this.onmessage)
        this.client.onopen(this.onopen)
        this.client.onclose(this.onclose)
		this.client.onerror(this.onerror)
		this.client.array = []
    }
	this.onerror = function(msg){
        console.log(msg)
    }
    this.onclose = function(msg){
        console.log("wss-close")
    }
    this.onopen = function(msg){
        console.log("wss-open")
    }
    this.onmessage = function(data){
        web.sys.executes.cmd(JSON.parse(data))
    }
    this.sends = new Send(web)
}