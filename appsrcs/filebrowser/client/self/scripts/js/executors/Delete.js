web.app.filebrowser.src.self.executors.Delete = function(web){
    this.onServer = function(info){
        web.socket.data = new web.Data()
        web.socket.data.cmd = "web.app.filebrowser.self.executes.delete.onServer"
        web.socket.data.info = info
        web.socket.sends.data()
    }
    this.onClient = function(info){
        web.app.filebrowser.table.operates.exit.withPath(info)
    }
}