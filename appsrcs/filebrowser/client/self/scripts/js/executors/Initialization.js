web.app.filebrowser.src.self.executors.Initialization = function(web){
    this.task = function(){
        if(web.app.gui !== undefined || web.user == null){
            web.socket.data = new web.Data()
            web.socket.data.cmd = "web.app.filebrowser.self.executes.init.task"
            let path = null
            let id = web.app.gui.window.engine.ofEnum.nodes.last.win.id
            path = $('#'+id+'.window').find('.path').html()
            web.socket.data.info.id = id
            web.socket.data.info.path = path
            web.socket.sends.data()
            let script = $('#'+id+'.window').find('script#filebrowser')
            script.empty()
            script.html('web.app.filebrowser.self.executes.init.event()')
        }else if(web.user == null){
            window.location.replace('/login')
        }else if(web.user.id === undefined){
            window.location.replace('/gui')
        }
    }
    this.completion = function(info){
        web.app.filebrowser.table.operates.parade.withID(info)
        web.app.filebrowser.table.operates.setting.ofEvent.withID(info)
        web.app.filebrowser.winContentDiv.operates.setting.ofEvent(info)
    }
    this.event = function(){
        if(web.app.gui.isRecovered){
            info = {id:web.app.gui.window.engine.ofEnum.nodes.last.win.id}
            web.app.filebrowser.table.operates.setting.ofEvent.withID(info)
            web.app.filebrowser.winContentDiv.operates.setting.ofEvent(info)
        }
    }
}