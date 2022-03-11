web.app.gui.src.msg.controllers.Controller = function(web){
    this.window = function(event){
        web.app.gui.msg.operates.window(event)
    }
    this.x = function(event){
        web.app.gui.msg.operates.x(event)
    }
    this.xAll = function(event){
        web.app.gui.msg.operates.xAll(event)
    }
}