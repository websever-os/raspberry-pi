web.app.filebrowser.src.self.Self = function(web){
    this.executes = new FilebrowserSelfExecutor(web)
    this.operates = new FilebrowserSelfOperator(web)
}