web.app.filebrowser.src.self.executors.Rename = function(web){
    this.onServer = function(info){
        web.socket.data = new web.Data()
        web.socket.data.cmd = "web.app.filebrowser.self.executes.rename.onServer"
        web.socket.data.info = info
        web.socket.sends.data()
    }
    this.onClient = function(info){
        web.app.filebrowser.table.operates.exit.withPath({path:info.path,list:info.srcList})
        let trs = web.app.filebrowser.table.operates.parade.withPath({path:info.path,list:info.dstList})
        web.app.filebrowser.table.operates.setting.ofEvent.withTrs(trs)
    }
}