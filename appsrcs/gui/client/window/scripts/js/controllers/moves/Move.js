web.app.gui.src.window.controllers.moves.Move = function(web){
    this.forFocus = new WindowFocusMoveController(web)
    this.forDrag = new WindowDragMoveController(web)
}