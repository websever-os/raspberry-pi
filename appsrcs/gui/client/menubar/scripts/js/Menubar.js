web.app.gui.src.menubar.Menubar = function(web){
    this.controls = new MenubarController(web)
    this.event = new MenubarEvent(web)
    this.executes = new MenubarExecutor(web)
    this.operates = new MenubarOperator(web)
    this.view = new MenubarView(web)
}