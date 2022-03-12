web.app.gui.src.menubar.executors.Executor = function(web){
    this.init = new MenubarInitializationExecutor(web)
    this.logout = function(){
        web.socket.data = new web.Data()
        web.socket.data.cmd = "web.app.gui.menubar.executes.logout"
		web.socket.sends.data()
    }
    this.redirect = function(){
        window.location.replace('/login')
    }
}