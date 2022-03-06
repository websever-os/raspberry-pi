web.app.gui.src.background.Background = function(web){
    this.event = new BackgroundEvent(web)
    this.executes = new BackgroundExecutor(web)
}