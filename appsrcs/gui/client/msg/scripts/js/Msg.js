web.app.gui.src.msg.MSG = function(web){
    this.controls = new MsgController(web)
    this.event = new MsgEvent(web)
    this.executes = new MsgExecutor(web)
    this.operates = new MsgOperator(web)
    this.view = new MsgView(web)
}