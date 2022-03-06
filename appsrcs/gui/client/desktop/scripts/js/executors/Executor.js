web.app.gui.src.desktop.executors.Executor = function(web){
    this.init = new DesktopInitExecutor(web)
    this.redirect = new DesktopRedirectExecutor(web)
    this.user = new DesktopUserExecutor(web)
}