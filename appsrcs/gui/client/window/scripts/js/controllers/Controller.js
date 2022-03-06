web.app.gui.src.window.controllers.Controller = function(web){
    this.button = new WindowButtonController(web)
    this.change = new WindowChangeController(web)
    this.move = new WindowMoveController(web)
    this.resize = new WindowResizeController(web)
}