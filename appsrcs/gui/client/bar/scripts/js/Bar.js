web.app.gui.src.bar.Bar = function(web){
    this.controls = new BarController(web)
    this.event = new BarEvent(web)
    this.operates = new BarOperator(web)
    this.Model = BarModel
}
