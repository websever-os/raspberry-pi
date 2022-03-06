web.app.filebrowser.src.self.executors.Cut = function(web){
    this.onServer = function(info){
        web.socket.data = new web.Data()
        web.socket.data.cmd = "web.app.filebrowser.self.executes.cut.onServer"
        web.socket.data.info = info
        web.socket.sends.data()
    }
    this.onClient = function(info){
        if(info.mode == 'dst'){
            let trs = web.app.filebrowser.table.operates.parade.withPath(info)
            web.app.filebrowser.table.operates.setting.ofEvent.withTrs(trs)
        }else if(info.mode == 'src'){
            web.app.filebrowser.table.operates.exit.withPath(info)
        }
    }
}