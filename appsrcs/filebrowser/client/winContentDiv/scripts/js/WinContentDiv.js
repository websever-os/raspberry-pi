web.app.filebrowser.src.winContentDiv.Wincontent = function(web){
    this.controls = new FilebrowserWinContentDivController(web)
    this.event = new FilebrowserWinContentDivEvent(web)
    this.operates = new FilebrowserWinContentDivOperator(web)
}