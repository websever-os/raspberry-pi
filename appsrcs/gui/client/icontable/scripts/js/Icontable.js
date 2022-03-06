web.app.gui.src.icontable.Icontable = function(web){
    this.controls = new IcontableController(web)
    this.events = new IcontableEvent(web)
    this.executes = new IcontableExecutor(web)
    this.operates = new IcontableOperator(web)
}