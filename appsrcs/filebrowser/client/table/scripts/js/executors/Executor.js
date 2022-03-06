web.app.filebrowser.src.table.executors.Executor = function(web){
    this.loading = new FilebrowserTableLoadExecutor(web)
    this.parade = new FilebrowserTableParadeExecutor(web)
}