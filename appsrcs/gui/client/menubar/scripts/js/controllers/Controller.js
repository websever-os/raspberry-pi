web.app.gui.src.menubar.controllers.Controller = function(web){
    this.button = function(event){
        web.app.gui.menubar.operates.menu(event)
    }
    this.logout = function(event){
        web.app.gui.menubar.operates.logout(event)
    }
}