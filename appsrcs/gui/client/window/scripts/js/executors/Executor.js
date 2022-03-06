web.app.gui.src.window.executors.Executor = function(web){
    this.sheltering = function(info){
        web.socket.data = new web.Data()
        web.socket.data.cmd = "web.app.gui.window.executes.sheltering"
        web.socket.data.info = info
		web.socket.sends.data()
    }
    this.synchronization = function(info){
        web.app.gui.window.operates.synchronization(info)
    }
}