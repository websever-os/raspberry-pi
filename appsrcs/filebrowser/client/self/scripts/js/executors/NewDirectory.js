web.app.filebrowser.src.self.executors.NewDirectory = function(web){
    this.onServer = function(info){
        web.socket.data = new web.Data()
        web.socket.data.cmd = "web.app.filebrowser.self.executes.newDirectory.onServer"
        web.socket.data.info = info
        web.socket.sends.data()
    }
    this.onClient = function(info){
        let trs = web.app.filebrowser.table.operates.parade.withPath(info)
        web.app.filebrowser.table.operates.setting.ofEvent.withTrs(trs)
    }
}