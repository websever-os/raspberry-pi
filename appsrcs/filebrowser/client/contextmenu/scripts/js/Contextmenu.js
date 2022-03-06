web.app.filebrowser.src.contextmenu.Contextmenu = function(web){
    this.controls = new FilebrowserContextmenuController(web)
    this.operates = new FilebrowserContextmenuOperator(web)
    this.view = new FilebrowserContextmenuView(web)
    this.event = new FilebrowserContextmenuEvent(web)
}