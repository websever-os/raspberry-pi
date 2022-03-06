web.app.gui.src.icontable.executors.icons.Update = function(web){
    this.ofCoordinate = function(info){
        web.socket.data = new web.Data()
        web.socket.data.cmd = "web.app.gui.icontable.executes.icon.update.ofCoordinate"
        web.socket.data.info = info
		web.socket.sends.data()
    }
}