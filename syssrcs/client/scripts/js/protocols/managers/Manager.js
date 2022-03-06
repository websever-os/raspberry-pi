web.sys.srcs.protocols.managers.Manager = function(web){
    this.socket = new WebsocketManager(web)
    web.socket = this.socket
}