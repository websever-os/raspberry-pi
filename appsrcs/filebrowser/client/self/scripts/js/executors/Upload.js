web.app.filebrowser.src.self.executors.Upload = function(web){
    this.onServer = function(info){

    }
    this.onClient = function(info){
        let trs = web.app.filebrowser.table.operates.parade.withPath(info)
        web.app.filebrowser.table.operates.setting.ofEvent.withTrs(trs)
    }
}