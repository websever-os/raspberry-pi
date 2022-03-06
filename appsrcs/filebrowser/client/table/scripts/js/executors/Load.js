web.app.filebrowser.src.table.executors.Load = function(web){
    this.directory = function(info){
        web.socket.data = new web.Data()
        web.socket.data.cmd = "web.app.filebrowser.table.executes.loading.directory"
        web.socket.data.info = info
        web.socket.sends.data()
    }
}