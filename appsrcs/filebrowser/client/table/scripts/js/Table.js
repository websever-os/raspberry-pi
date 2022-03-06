web.app.filebrowser.src.table.Table = function(web){
    this.controls = new FilebrowserTableController(web)
    this.event = new FilebrowserTableEvent(web)
    this.executes = new FilebrowserTableExecutor(web)
    this.operates = new FilebrowserTableOperator(web)
}