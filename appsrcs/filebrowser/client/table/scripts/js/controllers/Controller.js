web.app.filebrowser.src.table.controllers.Controller = function(web){
    this.change = new FilebrowserTableChangeController(web)
    this.selection = new FilebrowserTableSelectionController(web)
}