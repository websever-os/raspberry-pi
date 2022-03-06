web.app.gui.src.window.engines.Engine = function(web){
    this.ofCoordinate = new WindowCoordinateEngine(web)
    this.ofEnum = new WindowEnumEngine(web)
    this.ofMove = new WindowMoveEngine(web)
    this.ofResize = new WindowResizeEngine(web)
}