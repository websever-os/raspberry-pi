web.app.gui.src.msg.executes.Executor = function(web){
    this.init = new MsgInitializationExecutor(web)
    this.receiving = function(info){
        web.app.gui.msg.operates.notice(info)
    }
}