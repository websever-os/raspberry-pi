web.app.filebrowser.src.rubberband.Rubberband = function(web){
    this.engine = new FilebrowserRubberbandEngine(web)
    this.event = new FilebrowserRubberbandEvent(web)
    this.controls = new FilebrowserRubberbandController(web)
    this.operates = new FilebrowserRubberbandOperator(web)
}