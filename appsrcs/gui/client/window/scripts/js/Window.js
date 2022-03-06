web.app.gui.src.window.Window = function(web){
    this.controls = new WindowController(web)
    this.engine = new WindowEngine(web)
    this.event = new WindowEvent(web)
    this.executes = new WindowExecutor(web)
    this.operates = new WindowOperator(web)
    this.Model = WindowModel
    this.View = WindowView
}